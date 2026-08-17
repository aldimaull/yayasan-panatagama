const WP_REST_URL =
  import.meta.env.WP_REST_URL || "https://cms.aldimaul.my.id/wp-json/wp/v2";

const FALLBACK_COVER = "berita-04";
const DEFAULT_AUTHOR = "Admin Panatagama";
const VALID_CATEGORIES = ["Prestasi", "Kegiatan", "Pengumuman", "Parenting"];
const DEFAULT_CATEGORY = "Kegiatan";

/**
 * `_embed=1` bikin WordPress otomatis nyertain data terkait
 * (featured image, term taxonomy) dalam satu request, tanpa perlu
 * request terpisah per post kayak sebelumnya di GraphQL.
 */
export async function getAllPosts() {
  const url = `${WP_REST_URL}/berita?_embed=1&per_page=100&orderby=date&order=desc`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`WordPress REST request failed: ${res.status}`);
  }

  const posts = await res.json();
  return posts.map(mapBeritaToPost);
}

function mapBeritaToPost(post) {
  const plainText = stripHtml(post.content?.rendered);
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const categoryTerms = (post._embedded?.["wp:term"] || [])
    .flat()
    .filter((term) => term.taxonomy === "kategori-berita");

  return {
    title: post.title?.rendered || "",
    slug: post.slug,
    date: post.date,
    excerpt: post.acf?.ringkasan || plainText.slice(0, 150),
    cover: featuredMedia?.source_url || FALLBACK_COVER,
    coverWidth: featuredMedia?.media_details?.width || null,
    coverHeight: featuredMedia?.media_details?.height || null,
    category: resolveCategory(categoryTerms),
    readingTime,
    author: DEFAULT_AUTHOR,
    content: post.content?.rendered || "",
  };
}

function resolveCategory(terms) {
  const name = terms[0]?.name;
  return VALID_CATEGORIES.includes(name) ? name : DEFAULT_CATEGORY;
}

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").trim();
}
