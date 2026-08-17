/**
 * Resolver gambar: mengubah nama file (tanpa ekstensi) menjadi ImageMetadata
 * agar data layer tetap berupa string biasa, tapi tetap lewat pipeline Astro Image.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
  },
);

const map = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const key = path
    .split("/")
    .pop()!
    .replace(/\.(jpg|jpeg|png|webp|avif)$/i, "");
  map.set(key, mod.default);
}

export function img(name: string): ImageMetadata {
  const found = map.get(name);
  if (!found) {
    throw new Error(
      `Gambar "${name}" tidak ada di src/assets/. Jalankan \`npm run generate:images\` atau perbaiki nama file.`,
    );
  }
  return found;
}

export function hasImg(name: string): boolean {
  return map.has(name);
}

/**
 * Resolusi cover yang bisa berasal dari dua sumber:
 * - nama file lokal di src/assets/ (dari data/news.ts statis)
 * - URL remote (dari WordPress headless), yang wajib punya width/height
 *   eksplisit supaya astro:assets tidak error CLS.
 */
export function resolveCover(
  cover: string,
  width?: number | null,
  height?: number | null,
) {
  const isRemote = /^https?:\/\//.test(cover);
  if (isRemote) {
    return {
      src: cover,
      width: width || 1200,
      height: height || 900,
    };
  }
  return {
    src: img(cover),
    width: undefined,
    height: undefined,
  };
}
