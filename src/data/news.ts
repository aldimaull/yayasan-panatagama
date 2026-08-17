/**
 * Berita & kegiatan — PLACEHOLDER.
 * Struktur ini siap dipindahkan ke Astro Content Collections (Markdown) saat redaksi mulai menulis.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Prestasi' | 'Kegiatan' | 'Pengumuman' | 'Parenting';
  date: string; // ISO
  author: string;
  readingTime: number;
  cover: string;
  featured?: boolean;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'spmb-2027-2028-resmi-dibuka',
    title: 'SPMB Tahun Ajaran 2027/2028 Resmi Dibuka',
    excerpt:
      'Pendaftaran siswa baru KB, TK, SD, dan SMP Panatagama Islamic School dibuka dalam tiga gelombang. Gelombang pertama memberi pilihan kuota dan jadwal observasi paling lapang.',
    category: 'Pengumuman',
    date: '2026-08-01',
    author: 'Humas Yayasan Panatagama',
    readingTime: 3,
    cover: 'berita-01',
    featured: true,
    body: [
      'Yayasan Panatagama secara resmi membuka Seleksi Penerimaan Murid Baru (SPMB) untuk tahun ajaran 2027/2028. Pendaftaran dibuka untuk seluruh jenjang: Kelompok Bermain, Taman Kanak-kanak, Sekolah Dasar, dan Sekolah Menengah Pertama.',
      'Pendaftaran dibagi menjadi tiga gelombang. Gelombang pertama berlangsung Agustus hingga Oktober saat kuota masih paling lapang, disusul gelombang kedua pada November sampai Januari, dan gelombang ketiga hingga kuota masing-masing jenjang terpenuhi.',
      'Calon wali murid dapat mendaftar secara online melalui portal SPMB, atau datang langsung ke kampus untuk berkonsultasi dengan tim penerimaan. Kami menganjurkan orang tua menjadwalkan kunjungan sekolah terlebih dahulu agar dapat melihat langsung suasana belajar dan fasilitas yang tersedia.',
      'Setiap calon peserta didik akan mengikuti observasi kesiapan belajar — bukan tes akademik yang menegangkan. Tujuannya membantu sekolah menempatkan anak pada pendampingan yang tepat sejak hari pertama.',
      'Informasi lengkap mengenai syarat berkas dan jadwal dapat dilihat pada halaman SPMB. Hal-hal yang perlu dibicarakan lebih personal dapat ditanyakan langsung melalui WhatsApp panitia masing-masing jenjang.',
    ],
  },
  {
    slug: 'tasmi-akbar-hafalan-2-juz',
    title: 'Tasmi’ Akbar: 38 Siswa Setorkan Hafalan 2 Juz',
    excerpt:
      'Digelar di hall sekolah dan disaksikan langsung oleh wali murid, tasmi’ akbar menjadi penanda capaian program tahfidz metode Tilawati tahun ini.',
    category: 'Prestasi',
    date: '2026-07-18',
    author: 'Koordinator Tahfidz',
    readingTime: 4,
    cover: 'berita-02',
    featured: true,
    body: [
      'Sebanyak 38 siswa SD dan SMP Panatagama Islamic School menyelesaikan tasmi’ akbar di hall sekolah pekan lalu. Kegiatan ini menjadi puncak program tahfidz yang dijalankan sepanjang tahun ajaran dengan metode Tilawati.',
      'Tasmi’ adalah kegiatan memperdengarkan hafalan secara utuh di hadapan penguji dan jamaah. Berbeda dengan setoran harian, tasmi’ menuntut konsistensi hafalan dalam durasi panjang tanpa terputus.',
      'Program tahfidz Panatagama menargetkan hafalan minimal dua juz bagi setiap lulusan. Target ini dicapai bertahap melalui setoran harian, muroja’ah terjadwal, serta pendampingan guru tahfidz dalam kelompok kecil.',
      'Wali murid diundang menyaksikan langsung. Banyak di antaranya mengaku terharu melihat anak-anak mereka melantunkan hafalan dengan percaya diri di depan ratusan pasang mata.',
    ],
  },
  {
    slug: 'juara-umum-olimpiade-sains-subang',
    title: 'Siswa Panatagama Raih Juara Umum Olimpiade Sains Tingkat Kabupaten',
    excerpt:
      'Tim SD dan SMP membawa pulang tujuh medali dari cabang Matematika dan IPA, hasil pembinaan rutin klub olimpiade sepanjang semester.',
    category: 'Prestasi',
    date: '2026-06-24',
    author: 'Humas Yayasan Panatagama',
    readingTime: 3,
    cover: 'berita-03',
    body: [
      'Delegasi Panatagama Islamic School meraih juara umum pada Olimpiade Sains tingkat Kabupaten Subang. Tujuh medali diperoleh dari cabang Matematika dan Ilmu Pengetahuan Alam untuk jenjang SD dan SMP.',
      'Capaian ini merupakan buah dari pembinaan rutin klub olimpiade yang berjalan dua kali sepekan di luar jam belajar. Pembinaan menekankan pemahaman konsep melalui metode GASING, bukan sekadar latihan soal.',
      'Kepala sekolah menyampaikan bahwa yang paling membanggakan bukan medalinya, melainkan kebiasaan anak-anak untuk tekun mencoba dan tidak menyerah saat menghadapi soal yang sulit.',
      'Para peraih medali selanjutnya akan mengikuti pembinaan lanjutan untuk persiapan seleksi tingkat provinsi.',
    ],
  },
  {
    slug: 'future-leaders-camp-2026',
    title: 'Future Leaders’ Camp 2026: Belajar Memimpin dari Hal Kecil',
    excerpt:
      'Tiga hari penuh kegiatan kepemimpinan, public speaking, dan kerja tim untuk siswa SMP — ditutup dengan proyek sosial di lingkungan sekitar sekolah.',
    category: 'Kegiatan',
    date: '2026-05-30',
    author: 'Kesiswaan SMP',
    readingTime: 4,
    cover: 'berita-04',
    body: [
      'Future Leaders’ Camp kembali digelar untuk siswa SMP Panatagama Islamic School. Kegiatan tiga hari ini dirancang membentuk karakter kepemimpinan yang berakar pada adab dan tanggung jawab.',
      'Peserta mengikuti sesi public speaking, manajemen organisasi, simulasi pengambilan keputusan, dan malam muhasabah. Setiap kelompok juga menyusun proyek sosial kecil yang harus dieksekusi di lingkungan sekitar sekolah.',
      'Salah satu kelompok memilih membenahi taman baca di masjid dekat kampus, sementara kelompok lain menggelar kelas mengaji singkat untuk anak-anak sekitar.',
      'Kegiatan ini merupakan bagian dari program kokurikuler yayasan yang berjalan beriringan dengan Odyssey Plan — program pemetaan minat dan rencana studi lanjut siswa.',
    ],
  },
  {
    slug: 'parenting-mendampingi-anak-di-era-digital',
    title: 'Parenting Class: Mendampingi Anak di Era Layar',
    excerpt:
      'Home Visit & Parenting Program menghadirkan sesi khusus tentang mengelola waktu layar anak tanpa perang setiap hari di rumah.',
    category: 'Parenting',
    date: '2026-04-12',
    author: 'Tim Bimbingan Konseling',
    readingTime: 5,
    cover: 'berita-05',
    body: [
      'Bagian dari Home Visit & Parenting Program, sesi parenting kali ini membahas satu keluhan yang hampir selalu muncul: bagaimana mengatur waktu layar anak tanpa berujung pertengkaran.',
      'Narasumber menekankan bahwa aturan yang disepakati bersama jauh lebih efektif daripada larangan sepihak. Anak yang dilibatkan dalam menyusun aturan cenderung lebih patuh menjalankannya.',
      'Sekolah juga membagikan pendekatan yang diterapkan di kelas: teknologi diperkenalkan sebagai alat untuk berkarya — lewat coding project dan mini research — bukan sekadar hiburan pasif.',
      'Sesi ditutup dengan diskusi kelompok kecil bersama wali kelas, di mana orang tua dapat menanyakan kasus spesifik yang mereka hadapi di rumah.',
    ],
  },
  {
    slug: 'market-day-literasi-finansial',
    title: 'Market Day: Anak-anak Belajar Berdagang dan Berhitung Untung',
    excerpt:
      'Financial Literacy Project menutup semester dengan pasar kecil buatan siswa — dari menyusun modal, menetapkan harga, hingga menghitung laba.',
    category: 'Kegiatan',
    date: '2026-03-08',
    author: 'Koordinator Kokurikuler',
    readingTime: 3,
    cover: 'berita-06',
    body: [
      'Halaman sekolah berubah menjadi pasar kecil pada gelaran Market Day semester ini. Setiap kelas membuka lapak dengan produk yang mereka siapkan sendiri, mulai dari makanan ringan hingga kerajinan tangan.',
      'Sebelum hari-H, siswa menyusun rencana modal, menghitung harga jual, dan membagi peran dalam kelompok. Setelah acara selesai, mereka menghitung pemasukan dan menentukan berapa laba yang diperoleh.',
      'Kegiatan ini merupakan bagian dari Financial Literacy Project, salah satu program kokurikuler yayasan yang mengenalkan konsep uang, amanah, dan kewirausahaan sejak dini.',
      'Sebagian keuntungan dari setiap kelompok disisihkan untuk kegiatan sosial, mengajarkan bahwa rezeki yang didapat selalu memiliki hak orang lain di dalamnya.',
    ],
  },
];

export const categories = ['Semua', 'Prestasi', 'Kegiatan', 'Pengumuman', 'Parenting'] as const;

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const sortedPosts = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
