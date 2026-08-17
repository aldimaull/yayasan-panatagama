/**
 * Generator gambar placeholder ber-branding Panatagama.
 *
 * Menghasilkan file .jpg asli di `src/assets/` agar pipeline Astro Image
 * (resize, format modern, width/height otomatis → tanpa layout shift) benar-benar berjalan.
 *
 * GANTI seluruh isi src/assets/ dengan foto asli sebelum publish.
 * Jalankan ulang: npm run generate:images
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = join(root, 'src', 'assets');
const PUBLIC = join(root, 'public');

const PALETTE = {
  primary: ['#0A593A', '#04281A'],
  emerald: ['#22795A', '#084A30'],
  gold: ['#E0A600', '#9E7000'],
  orange: ['#EA5B23', '#A63512'],
  sage: ['#7CB9A0', '#22795A'],
  night: ['#063A26', '#021610'],
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Pola geometris islami: bintang 8 sudut + kisi belah ketupat */
function pattern(id, color, opacity) {
  return `
  <pattern id="${id}" width="88" height="88" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <g fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="1.6">
      <rect x="16" y="16" width="56" height="56"/>
      <rect x="16" y="16" width="56" height="56" transform="rotate(45 44 44)"/>
      <circle cx="44" cy="44" r="9"/>
      <path d="M44 0v88M0 44h88" stroke-opacity="${opacity * 0.45}"/>
    </g>
  </pattern>`;
}

function svg({ w, h, colors, label, sub, seed = 1 }) {
  const [c1, c2] = colors;
  const r = (n) => ((Math.sin(seed * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  const blobs = Array.from({ length: 4 }, (_, i) => {
    const cx = Math.round(r(i) * w);
    const cy = Math.round(r(i + 9) * h);
    const rad = Math.round((0.18 + r(i + 4) * 0.3) * Math.min(w, h));
    const fill = i % 2 === 0 ? '#FFFFFF' : '#E0A600';
    return `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="${fill}" opacity="${0.05 + r(i + 2) * 0.07}"/>`;
  }).join('');

  const capH = Math.round(Math.min(w, h) * 0.16);
  const fs = Math.max(15, Math.round(Math.min(w, h) * 0.052));
  const fsSub = Math.max(11, Math.round(fs * 0.5));

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="55%" stop-color="#021610" stop-opacity="0"/>
      <stop offset="100%" stop-color="#021610" stop-opacity="0.72"/>
    </linearGradient>
    ${pattern('p', '#FFFFFF', 0.16)}
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  ${blobs}
  <rect width="${w}" height="${h}" fill="url(#p)"/>
  <rect width="${w}" height="${h}" fill="url(#scrim)"/>
  <g transform="translate(${Math.round(w * 0.07)} ${h - capH})" font-family="Segoe UI, Arial, Helvetica, sans-serif">
    <rect x="0" y="-6" width="${Math.round(fs * 1.4)}" height="4" rx="2" fill="#E0A600"/>
    <text x="0" y="${Math.round(fs * 1.15)}" fill="#FFFFFF" font-size="${fs}" font-weight="700" letter-spacing="-0.5">${esc(label)}</text>
    <text x="0" y="${Math.round(fs * 1.15 + fsSub * 1.7)}" fill="#FFFFFF" fill-opacity="0.72" font-size="${fsSub}" font-weight="500" letter-spacing="1.6">${esc(sub.toUpperCase())}</text>
  </g>
</svg>`);
}

async function make(dir, name, opts, quality = 82) {
  const buf = await sharp(svg(opts)).jpeg({ quality, mozjpeg: true, progressive: true }).toBuffer();
  await sharp(buf).toFile(join(dir, `${name}.jpg`));
  return `${name}.jpg (${opts.w}×${opts.h})`;
}

const P = Object.values(PALETTE);

const assets = [
  ['hero-utama', 1400, 1750, PALETTE.primary, 'Suasana Belajar', 'Panatagama Islamic School'],
  ['hero-pendukung', 900, 900, PALETTE.gold, 'Tahfidz Tilawati', 'Target minimal 2 juz'],
  ['tentang-yayasan', 1200, 1500, PALETTE.emerald, 'Kampus Panatagama', 'Subang, Jawa Barat'],
  ['tentang-kegiatan', 1200, 800, PALETTE.sage, 'Pembiasaan Harian', 'Panatagama Habits Forming'],
  ['ppdb-hero', 1400, 900, PALETTE.orange, 'SPMB 2027/2028', 'Pendaftaran telah dibuka'],
  ['panatamart-hero', 1400, 900, PALETTE.orange, 'PanataMart', 'Unit usaha yayasan'],
  ['unit-kb-tk', 1200, 900, PALETTE.gold, 'KB & TK Cendekia', 'Usia 3–6 tahun'],
  ['unit-sd', 1200, 900, PALETTE.primary, 'SD Panatagama', 'Kelas 1–6'],
  ['unit-smp', 1200, 900, PALETTE.orange, 'SMP Panatagama', 'Kelas 7–9'],
  ['unit-course', 1200, 900, PALETTE.emerald, 'Panatagama Course', 'Bimbel & kursus'],
  ['unit-panatamart', 1200, 900, PALETTE.night, 'PanataMart', 'Koperasi & toko'],
  ['galeri-01', 1000, 1250, PALETTE.primary, 'Upacara Pagi', 'Kegiatan Sekolah'],
  ['galeri-02', 1200, 900, PALETTE.gold, 'Praktik Lab Sains', 'STEM Education'],
  ['galeri-03', 1000, 1000, PALETTE.orange, 'Market Day', 'Financial Literacy'],
  ['galeri-04', 1200, 900, PALETTE.emerald, 'Kelas Coding', 'Computer for Children'],
  ['galeri-05', 1000, 1250, PALETTE.sage, 'Program Aquatic', 'Kolam Renang'],
  ['galeri-06', 1200, 900, PALETTE.night, 'Khotmil Qur’an', 'Program Tahfidz'],
  ['galeri-07', 1000, 1000, PALETTE.gold, 'Cooking Day', 'Kelas Kreativitas'],
  ['galeri-08', 1200, 900, PALETTE.primary, 'Gema Pramuka', 'Ekstrakurikuler'],
  ['galeri-09', 1000, 1250, PALETTE.orange, 'Drum Band', 'Ekstrakurikuler'],
  ['galeri-10', 1200, 900, PALETTE.emerald, 'Rihlah Ilmiah', 'Edu Trip'],
  ['berita-01', 1400, 900, PALETTE.orange, 'SPMB Dibuka', 'Pengumuman'],
  ['berita-02', 1400, 900, PALETTE.primary, 'Tasmi’ Akbar', 'Prestasi'],
  ['berita-03', 1400, 900, PALETTE.gold, 'Olimpiade Sains', 'Prestasi'],
  ['berita-04', 1400, 900, PALETTE.emerald, 'Future Leaders’ Camp', 'Kegiatan'],
  ['berita-05', 1400, 900, PALETTE.sage, 'Parenting Class', 'Parenting'],
  ['berita-06', 1400, 900, PALETTE.night, 'Market Day', 'Kegiatan'],
];

await mkdir(ASSETS, { recursive: true });
await mkdir(PUBLIC, { recursive: true });

let i = 0;
for (const [name, w, h, colors, label, sub] of assets) {
  const out = await make(ASSETS, name, { w, h, colors, label, sub, seed: ++i });
  console.log('  ✓', out);
}

// Open Graph image (dipakai meta tag, harus di /public)
await sharp(
  svg({
    w: 1200,
    h: 630,
    colors: PALETTE.primary,
    label: 'Yayasan Panatagama',
    sub: 'Unggul dalam Akhlak, Ilmu dan Berprestasi',
    seed: 99,
  }),
)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(join(PUBLIC, 'og-image.jpg'));
console.log('  ✓ public/og-image.jpg (1200×630)');

console.log(`\nSelesai — ${assets.length + 1} gambar placeholder dibuat. Ganti dengan foto asli sebelum publish.`);
