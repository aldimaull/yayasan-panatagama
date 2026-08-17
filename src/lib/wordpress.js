const WP_GRAPHQL_URL =
  import.meta.env.WP_GRAPHQL_URL || "https://cms.aldimaul.my.id/graphql";

export async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`WordPress GraphQL request failed: ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    console.error(JSON.stringify(json.errors, null, 2));
    throw new Error("GraphQL query returned errors");
  }
  return json.data;
}

// Query semua berita, sekarang termasuk kategori dari taxonomy
// "Kategori Berita" (GraphQL name: kategoriBeritas).
const GET_ALL_BERITA = `
  query GetAllBerita {
    beritas(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        detailBerita {
          ringkasan
        }
        kategoriBeritas {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const FALLBACK_COVER = "berita-04";
const DEFAULT_AUTHOR = "Admin Panatagama";

// `Post['category']` di kode Astro adalah union type tertutup:
// 'Prestasi' | 'Kegiatan' | 'Pengumuman' | 'Parenting'.
// Term taxonomy di WordPress sudah dibuat persis 4 nama ini,
// jadi tinggal dipetakan langsung. Kalau post belum diberi
// kategori sama sekali di WordPress, fallback ke 'Kegiatan'
// supaya tidak merusak badge warna di NewsCard.
const VALID_CATEGORIES = ["Prestasi", "Kegiatan", "Pengumuman", "Parenting"];
const DEFAULT_CATEGORY = "Kegiatan";

function resolveCategory(node) {
  const name = node.kategoriBeritas?.nodes?.[0]?.name;
  return VALID_CATEGORIES.includes(name) ? name : DEFAULT_CATEGORY;
}

function mapBeritaToPost(node) {
  const plainText = stripHtml(node.content);
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  const featuredImg = node.featuredImage?.node;

  return {
    title: node.title,
    slug: node.slug,
    date: node.date,
    excerpt: node.detailBerita?.ringkasan || plainText.slice(0, 150),
    cover: featuredImg?.sourceUrl || FALLBACK_COVER,
    coverWidth: featuredImg?.mediaDetails?.width || null,
    coverHeight: featuredImg?.mediaDetails?.height || null,
    category: resolveCategory(node),
    readingTime,
    author: DEFAULT_AUTHOR,
    content: node.content || "",
  };
}

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").trim();
}

export async function getAllPosts() {
  const data = await fetchGraphQL(GET_ALL_BERITA);
  const nodes = data?.beritas?.nodes || [];
  return nodes.map(mapBeritaToPost);
}
