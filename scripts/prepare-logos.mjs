/**
 * Menyiapkan berkas logo resmi:
 *  - menormalkan nama berkas ke kebab-case (nama asli mengandung spasi & "&")
 *  - memangkas ruang transparan di sekeliling logo
 *  - memotong lambang (tanpa wordmark) dari logo yayasan untuk dipakai di ukuran kecil
 *  - membuat favicon dan gambar Open Graph dari logo resmi
 *
 * Aman dijalankan berulang. Jalankan: node scripts/prepare-logos.mjs
 */
import sharp from 'sharp';
import { readdirSync, existsSync, renameSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = join(root, 'src', 'assets');
const PUBLIC = join(root, 'public');
mkdirSync(PUBLIC, { recursive: true });

/* 1 ── Normalkan nama berkas ------------------------------------------------ */
const renames = [
  ['Logo YAYASAN TRANSPARENT.png', 'logo-yayasan.png'],
  ['Logo KB & TK.png', 'logo-kb-tk.png'],
  ['Logo SD.png', 'logo-sd.png'],
  ['Logo SMP.png', 'logo-smp.png'],
  ['LOGO PANATAGAMA COURSE.png', 'logo-course.png'],
];

for (const [from, to] of renames) {
  const src = join(ASSETS, from);
  const dst = join(ASSETS, to);
  if (existsSync(src) && !existsSync(dst)) {
    renameSync(src, dst);
    console.log(`  ganti nama  ${from}  →  ${to}`);
  }
}

/* 2 ── Rapikan logo unit: pangkas transparansi + turunkan resolusi ---------- */
const unitLogos = ['logo-kb-tk.png', 'logo-sd.png', 'logo-smp.png', 'logo-course.png'];
for (const name of unitLogos) {
  const file = join(ASSETS, name);
  if (!existsSync(file)) continue;
  const before = await sharp(file).metadata();
  if (before.width <= 1400) {
    console.log(`  lewati      ${name} (sudah ${before.width}px)`);
    continue;
  }
  const buf = await sharp(file)
    .trim()
    .resize({ width: 1400, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
  await sharp(buf).toFile(file);
  const after = await sharp(file).metadata();
  console.log(`  rapikan     ${name}  ${before.width}×${before.height} → ${after.width}×${after.height}`);
}

/* 3 ── Lambang yayasan tanpa wordmark (untuk navbar & favicon) -------------- */
const yayasan = join(ASSETS, 'logo-yayasan.png');
const markPath = join(ASSETS, 'logo-yayasan-mark.png');
if (existsSync(yayasan)) {
  const meta = await sharp(yayasan).metadata();
  // Wordmark "YAYASAN Panatagama" menempati kira-kira 26% bagian bawah
  const cropH = Math.round(meta.height * 0.74);
  const mark = await sharp(yayasan)
    .extract({ left: 0, top: 0, width: meta.width, height: cropH })
    .trim()
    .png()
    .toBuffer();
  await sharp(mark).toFile(markPath);
  const m = await sharp(markPath).metadata();
  console.log(`  lambang     logo-yayasan-mark.png  ${m.width}×${m.height}`);

  /* 4 ── Favicon & apple touch icon ---------------------------------------- */
  for (const [size, out] of [[32, 'favicon-32.png'], [192, 'favicon-192.png'], [180, 'apple-touch-icon.png']]) {
    await sharp(mark)
      .resize({ width: size, height: size, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(join(PUBLIC, out));
    console.log(`  favicon     public/${out}`);
  }

  /* 5 ── Gambar Open Graph memakai logo resmi ------------------------------ */
  const W = 1200, H = 630;
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0A593A"/><stop offset="100%" stop-color="#04281A"/>
      </linearGradient>
      <pattern id="p" width="88" height="88" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <g fill="none" stroke="#FFFFFF" stroke-opacity="0.10" stroke-width="1.6">
          <rect x="16" y="16" width="56" height="56"/>
          <rect x="16" y="16" width="56" height="56" transform="rotate(45 44 44)"/>
          <circle cx="44" cy="44" r="9"/>
        </g>
      </pattern>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <rect width="${W}" height="${H}" fill="url(#p)"/>
    <rect x="0" y="${H - 10}" width="${W}" height="10" fill="#E0A600"/>
    <g font-family="Segoe UI, Arial, sans-serif" text-anchor="middle">
      <text x="${W / 2}" y="474" fill="#FFFFFF" font-size="46" font-weight="800" letter-spacing="-1">Yayasan Panatagama</text>
      <text x="${W / 2}" y="522" fill="#E0A600" font-size="25" font-weight="600" letter-spacing="3">UNGGUL DALAM AKHLAK, ILMU DAN BERPRESTASI</text>
      <text x="${W / 2}" y="572" fill="#FFFFFF" fill-opacity="0.62" font-size="21" font-weight="500">KB · TK · SD · SMP · Course · PanataMart — Subang, Jawa Barat</text>
    </g>
  </svg>`);

  // Logo diletakkan di atas plat putih: hijau tua pada lambang tenggelam bila
  // langsung ditempel di latar hijau gelap.
  const logoOnOg = await sharp(mark).resize({ height: 232, fit: 'inside' }).toBuffer();
  const lm = await sharp(logoOnOg).metadata();
  const padX = 54, padY = 40, radius = 44;
  const plateW = lm.width + padX * 2;
  const plateH = lm.height + padY * 2;
  const plate = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${plateW}" height="${plateH}">
       <rect width="${plateW}" height="${plateH}" rx="${radius}" ry="${radius}" fill="#FFFFFF"/>
     </svg>`,
  );
  const plateTop = 62;
  const plateLeft = Math.round((W - plateW) / 2);
  await sharp(bg)
    .composite([
      { input: plate, top: plateTop, left: plateLeft },
      { input: logoOnOg, top: plateTop + padY, left: plateLeft + padX },
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(join(PUBLIC, 'og-image.jpg'));
  console.log('  open graph  public/og-image.jpg  1200×630');
}

console.log('\nSelesai.');
console.log('Berkas di src/assets:', readdirSync(ASSETS).filter((f) => f.startsWith('logo-')).join(', '));
