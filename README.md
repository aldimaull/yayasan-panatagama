# Website Company Profile — Yayasan Panatagama

Website statis untuk Yayasan Panatagama (Subang, Jawa Barat) yang menaungi KB & TK Cendekia,
SD & SMP Panatagama Islamic School, Panatagama Course, dan PanataMart.

Dibangun dengan **Astro 5 + Tailwind CSS 3**, dirancang mobile-first, tanpa framework UI tambahan.

---

## Menjalankan

```bash
npm install
```

```bash
npm run dev
```

Buka http://localhost:4321

| Perintah                  | Fungsi                                            |
| ------------------------- | ------------------------------------------------- |
| `npm run dev`             | Server pengembangan                               |
| `npm run build`           | Build produksi ke `dist/`                         |
| `npm run preview`         | Pratinjau hasil build                             |
| `npm run generate:images` | Membuat ulang gambar placeholder di `src/assets/` |

---

## Struktur folder

```
src/
├─ assets/              Gambar (dioptimasi otomatis oleh Astro Image)
├─ components/          Komponen reusable
│  ├─ Navbar · Footer · Button · Icon · Logo
│  ├─ UnitCard · TestimonialCard · NewsCard · FeatureCard
│  ├─ SectionHeading · PageHero · CtaBand · StatsBand
│  └─ GalleryGrid · Accordion · Ornament · Reveal · FloatingWhatsApp
├─ data/                Sumber konten — ubah di sini, bukan di halaman
│  ├─ site.ts           Kontak, alamat, nav, statistik, fasilitas, nilai
│  ├─ units.ts          5 unit: program, kurikulum, fasilitas, logo, FAQ
│  ├─ ppdb.ts           Gelombang, alur, syarat, FAQ SPMB
│  ├─ news.ts           Berita & kegiatan
│  └─ testimonials.ts   Testimoni wali murid
├─ layouts/BaseLayout   Kerangka halaman: SEO, font, JSON-LD, scroll-reveal
├─ lib/images.ts        Pemetaan nama file → ImageMetadata
├─ pages/
│  ├─ index · tentang · ppdb · panatamart · kontak · 404
│  ├─ unit/[slug]       KB & TK, SD, SMP, Course (dari units.ts)
│  └─ berita/ index · [slug]
└─ styles/global.css    Base, komponen, utilitas, reduced-motion, view transitions
```

**Alur mengubah konten:** hampir semua teks ada di `src/data/`. Menambah unit atau artikel
cukup menambah objek pada array — halaman dan rute ikut terbentuk otomatis.

---

## Sistem desain

Token warna & tipografi ada di `tailwind.config.mjs`.

| Peran     | Warna                       | Penggunaan                                   |
| --------- | --------------------------- | -------------------------------------------- |
| Primary   | `#0A593A` (`primary-600`)   | Navbar solid, footer, heading, section gelap |
| Secondary | `#EA5B23` (`secondary-500`) | Aksen CTA, garis dekoratif, ikon             |
| Tersier   | `#E0A600` (`gold-400`)      | Badge, highlight, ornamen                    |
| Netral    | `sand-*`, `ink-*`           | Latar off-white & teks                       |

Catatan kontras: teks putih di atas `#EA5B23` hanya mencapai 3.5:1, di bawah ambang WCAG AA.
Karena itu **alas tombol dan badge memakai `secondary-600` (`#CB4514`, 4.8:1)** sementara
`#EA5B23` tetap dipakai penuh sebagai warna aksen. Seluruh halaman sudah diaudit dan
lolos AA (0 pelanggaran pada 12 halaman).

Tipografi memakai **Plus Jakarta Sans Variable** (self-host via Fontsource, weight 400–800)
dengan skala `display-*` fluid berbasis `clamp()`.

---

## Yang masih perlu diganti sebelum publish

Semua item di bawah ditandai `PLACEHOLDER` di dalam kode, dan sebagian tampil sebagai
"Catatan editor" berlatar kuning di halaman agar tidak terlewat.

1. **Foto kegiatan** — file `galeri-*`, `berita-*`, `unit-*`, `hero-*`, dan `tentang-*` di
   `src/assets/` masih placeholder bermerek buatan `scripts/generate-placeholders.mjs`.
   Ganti dengan foto asli memakai nama file yang sama. (Logo sudah asli — jangan ditimpa.)
2. **Jadwal gelombang SPMB** (`src/data/ppdb.ts`) — tanggal tiap gelombang.
3. **Statistik** (`src/data/site.ts`) — tahun berdiri, jumlah siswa, prestasi, kepuasan.
4. **Linimasa sejarah** (`src/pages/tentang.astro`) — tahun dan peristiwa.
5. **Manajer Panatagama Course** (`src/pages/tentang.astro`) — satu-satunya posisi yang masih
   kosong pada struktur organisasi; kartunya otomatis tampil sebagai "Belum diisi".
6. **Testimoni** (`src/data/testimonials.ts`) — ganti dengan kutipan asli beserta izin publikasi.
7. **Berita** (`src/data/news.ts`) — enam artikel contoh.
8. **Email** (`src/data/site.ts`) — `info@panatagama.sch.id` masih dugaan.
9. **Koordinat peta** (`src/data/site.ts`) — `mapEmbed` memakai pencarian alamat; ganti dengan
   embed pin persis dari Google Maps agar lokasi akurat.

Data yang **sudah sesuai brosur resmi**: alamat kedua kampus, nomor WhatsApp per jenjang,
visi & misi, daftar fasilitas, kurikulum, program kokurikuler, ekstrakurikuler, jam belajar,
akreditasi, dan anggota Panatagama Group. **Struktur organisasi** sudah memakai nama pejabat
sebenarnya.

---

## Logo

Logo resmi ada di `src/assets/` (`logo-yayasan`, `logo-kb-tk`, `logo-sd`, `logo-smp`,
`logo-course`). `scripts/prepare-logos.mjs` menormalkan nama berkas, memangkas ruang
transparan, memotong lambang tanpa wordmark (`logo-yayasan-mark`), lalu membuat favicon dan
gambar Open Graph. Jalankan ulang bila ada logo yang diperbarui:

```bash
node scripts/prepare-logos.mjs
```

Dua hal yang menentukan tampilannya:

- **Latar gelap butuh plat putih.** Bagian hijau tua pada logo tenggelam bila ditempel langsung
  di navbar/footer/hero yang gelap, jadi logo selalu diberi alas putih di sana.
- **Logo unit dipatok dari lebar, bukan tinggi.** Bentuknya lockup memanjang (rasio ±1,6:1);
  bila diberi `h-14` lebarnya hanya ±90px dan wordmark di dalamnya tidak terbaca. Di hero unit
  logo dipasang selebar 208–240px. Karena alasan yang sama logo unit tidak dipakai pada kartu
  kecil atau menu dropdown — di sana dipakai label teks dan ikon.

PanataMart belum punya logo; halamannya memakai judul teks (`unit.logo` opsional).

---

## Catatan teknis

**Performa** — nol JavaScript framework. Total JS ±15 KB (12.8 KB di antaranya router bawaan
Astro untuk transisi antarhalaman), CSS 12.5 KB gzip, HTML beranda 24 KB gzip. Gambar
dikonversi ke WebP dengan `srcset` responsif dan `width`/`height` eksplisit sehingga tidak
ada layout shift.

**Skrip interaktif** ditulis vanilla dan dipasang idempoten. Ini penting: `ClientRouter`
memicu `astro:page-load` **juga pada pemuatan awal**, sehingga tanpa penjaga (`dataset.bound`)
setiap handler terpasang dua kali — tombol menu akan saling membatalkan dan formulir membuka
dua tab WhatsApp.

**Formulir** (SPMB & kontak) tidak mengirim data ke server mana pun. Keduanya menyusun pesan
terstruktur lalu membuka WhatsApp admin — untuk SPMB, nomor mengikuti jenjang yang dipilih.
Bila nanti ingin menyimpan pendaftaran, sambungkan ke Formspree, Google Forms, atau endpoint
sendiri di `src/pages/ppdb.astro`.

**Aksesibilitas** — satu `<h1>` per halaman, urutan heading rapi, `alt` di semua gambar,
skip-link, focus ring konsisten, menu mobile dengan `aria-expanded` + tutup lewat Escape,
FAQ memakai `<details>` asli (tetap berfungsi tanpa JS), dan `prefers-reduced-motion` dihormati.

**SEO** — meta lengkap + Open Graph + Twitter Card, canonical URL, sitemap otomatis,
JSON-LD `EducationalOrganization` di semua halaman dan `NewsArticle` di halaman artikel.
Ganti `site` di `astro.config.mjs` bila domain final berbeda.

**Deploy** — hasil `npm run build` di `dist/` berupa file statis murni, bisa langsung
di-host di Netlify, Vercel, Cloudflare Pages, atau shared hosting biasa.
