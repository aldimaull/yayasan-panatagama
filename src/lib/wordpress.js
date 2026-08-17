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

// Query semua berita sekaligus isi lengkapnya. Dipakai baik untuk halaman
// daftar (/berita) maupun untuk generate halaman detail (/berita/[slug]),
// supaya cuma butuh 1 kali fetch saat build.
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
      }
    }
  }
`;

// Fallback gambar lokal (sudah ada di src/assets/) dipakai kalau
// post WordPress belum punya featured image.
const FALLBACK_COVER = "berita-04";

// Nama penulis belum bisa diambil dinamis dari WordPress karena
// Custom Post Type "Berita" belum mengaktifkan dukungan "Author".
// Untuk mengaktifkannya: Custom Fields → Post Types → Berita → Settings
// → centang "Author" di bagian Supports, baru field author bisa
// ditambahkan ke query GraphQL di atas.
const DEFAULT_AUTHOR = "Admin Panatagama";

// `Post['category']` di project ini adalah union type tertutup:
// 'Prestasi' | 'Kegiatan' | 'Pengumuman' | 'Parenting'.
// Taxonomy kategori belum dibuat di WordPress, jadi sementara
// semua berita di-set 'Kegiatan' dulu. Update setelah taxonomy jadi.
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
    category: "Kegiatan",
    readingTime,
    author: DEFAULT_AUTHOR,
    // HTML mentah dari WordPress (block editor). Dirender langsung
    // pakai set:html di halaman detail, bukan di-split jadi array
    // paragraf string seperti versi statis sebelumnya.
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
