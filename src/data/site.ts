/**
 * Sumber tunggal data lembaga.
 * Data kontak & alamat diambil dari brosur resmi SPMB 2027/2028.
 * Angka statistik bertanda `PLACEHOLDER` wajib dikonfirmasi sebelum publish.
 * Informasi biaya pendidikan tidak ditampilkan di website (bersifat rahasia).
 */

export const site = {
  name: 'Yayasan Panatagama',
  shortName: 'Panatagama',
  brand: 'Panatagama Islamic School',
  tagline: 'Unggul dalam Akhlak, Ilmu dan Berprestasi',
  url: 'https://panatagama.sch.id',
  spmbUrl: 'https://spmb.panatagama.sch.id',
  academicYear: '2027/2028',
  accreditation: 'Terakreditasi A — BAN-PDM',
  description:
    'Yayasan Panatagama menaungi KB, TK, SD, dan SMP Panatagama Islamic School, Panatagama Course, serta PanataMart di Subang, Jawa Barat. Pendidikan Islam modern dengan tahfidz Tilawati, kurikulum Merdeka, dan Cambridge Teaching Resources.',
  locale: 'id_ID',
  city: 'Subang, Jawa Barat',
} as const;

export const contact = {
  /** WhatsApp umum (informasi SPMB) */
  mainWhatsApp: { label: '0851-7953-8448', number: '6285179538448' },
  email: 'info@panatagama.sch.id',
  officeHours: 'Senin – Jumat, 07.00 – 15.30 WIB',
  social: {
    instagram: { handle: '@yayasan_panatagama', url: 'https://instagram.com/yayasan_panatagama' },
    facebook: { handle: 'yayasan_panatagama', url: 'https://facebook.com/yayasan_panatagama' },
    youtube: { handle: 'Yayasan Panatagama', url: 'https://youtube.com/@yayasanpanatagama' },
  },
} as const;

export type Campus = {
  id: string;
  name: string;
  units: string;
  address: string;
  mapQuery: string;
  mapEmbed: string;
};

export const campuses: Campus[] = [
  {
    id: 'cendekia',
    name: 'Kampus 1 — KB & TK Cendekia Panatagama',
    units: 'Kelompok Bermain & Taman Kanak-kanak',
    address:
      'Jl. Otto Iskandardinata No. 296 A, Sukamelang, Kec. Subang, Kab. Subang, Jawa Barat 41251',
    mapQuery: 'KB TK Cendekia Panatagama Jl. Otto Iskandardinata 296A Subang',
    mapEmbed:
      'https://www.google.com/maps?q=Jl.%20Otto%20Iskandardinata%20No.296%20A%2C%20Sukamelang%2C%20Subang%2C%20Jawa%20Barat%2041251&output=embed',
  },
  {
    id: 'darmodihardjo',
    name: 'Kampus 2 — SD & SMP Panatagama Islamic School',
    units: 'Sekolah Dasar, Sekolah Menengah Pertama & Panatagama Course',
    address:
      'Jl. Darmodihardjo No. 23 A, Sukamelang, Kec. Subang, Kab. Subang, Jawa Barat 41211',
    mapQuery: 'SD SMP Panatagama Islamic School Jl. Darmodihardjo 23A Subang',
    mapEmbed:
      'https://www.google.com/maps?q=Jl.%20Darmodihardjo%20No.%2023%20A%2C%20Sukamelang%2C%20Subang%2C%20Jawa%20Barat%2041211&output=embed',
  },
];

/** Nomor WhatsApp per jenjang (brosur SPMB) */
export const whatsappContacts = [
  { unit: 'KB & TK', label: '0812-2063-6971', number: '6281220636971' },
  { unit: 'SD', label: '0812-2279-6135', number: '6281222796135' },
  { unit: 'SMP', label: '0813-2627-0203', number: '6281326270203' },
  { unit: 'Informasi Umum', label: '0851-7953-8448', number: '6285179538448' },
];

/** Membangun link wa.me dengan pesan yang sudah terisi */
export function waLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage = `Assalamu'alaikum, saya ingin bertanya mengenai pendaftaran siswa baru di Panatagama Islamic School.`;

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  {
    label: 'Unit',
    href: '/#unit',
    children: [
      { label: 'KB & TK Cendekia', href: '/unit/kb-tk', desc: 'Usia 3–6 tahun' },
      { label: 'SD Panatagama', href: '/unit/sd', desc: 'Kelas 1–6' },
      { label: 'SMP Panatagama', href: '/unit/smp', desc: 'Kelas 7–9' },
      { label: 'Panatagama Course', href: '/unit/course', desc: 'Bimbel & kursus' },
      { label: 'PanataMart', href: '/panatamart', desc: 'Unit usaha yayasan' },
    ],
  },
  { label: 'SPMB', href: '/ppdb' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
];

/** Statistik ringkas — PLACEHOLDER, konfirmasi ke bagian humas */
export const stats = [
  { value: 2009, suffix: '', label: 'Tahun berdiri', desc: 'Melayani pendidikan Subang' },
  { value: 1240, suffix: '+', label: 'Siswa aktif', desc: 'Dari KB hingga SMP' },
  { value: 180, suffix: '+', label: 'Prestasi', desc: 'Tingkat kota s.d. nasional' },
  { value: 96, suffix: '%', label: 'Kepuasan wali murid', desc: 'Survei internal 2025' },
];

/** Grup usaha yang menaungi/bermitra dengan yayasan (dari brosur) */
export const groupPartners = [
  { name: 'RS. Hamori', desc: 'Layanan kesehatan & medical check up siswa' },
  { name: 'Rizma Tour & Travel', desc: 'Perjalanan edukasi, umrah & rihlah ilmiah' },
  { name: 'Martha Tillaar Cab. Subang', desc: 'Kemitraan pengembangan SDM' },
  { name: 'Atlantik Waterboom', desc: 'Fasilitas program aquatic siswa' },
];

export const facilities = [
  { icon: 'wind', label: 'Full AC Class' },
  { icon: 'book-open', label: 'Perpustakaan & UKS' },
  { icon: 'cctv', label: 'CCTV 24 Jam' },
  { icon: 'waves', label: 'Swimming Pool' },
  { icon: 'trophy', label: 'Sport Arena' },
  { icon: 'users', label: 'Student Center' },
  { icon: 'credit-card', label: 'Technology Integrated Card' },
  { icon: 'blocks', label: 'Playground Indoor & Outdoor' },
  { icon: 'flask', label: 'Lab. Komputer & Sains' },
  { icon: 'monitor', label: 'Multimedia Room' },
  { icon: 'building', label: 'Hall Room' },
  { icon: 'moon-star', label: 'Mushola' },
  { icon: 'utensils', label: 'Kantin Sehat' },
  { icon: 'shield-check', label: 'Asuransi Siswa' },
  { icon: 'bus', label: 'Shuttle Service' },
];

/** Nilai-nilai yang diusung — turunan dari tagline & Panatagama Habits Forming */
export const values = [
  {
    icon: 'heart-handshake',
    title: 'Berakhlak',
    desc: 'Panatagama Habits Forming menanamkan adab, kejujuran, dan empati lewat pembiasaan harian — bukan sekadar teori di kelas.',
  },
  {
    icon: 'book-open',
    title: 'Berilmu',
    desc: 'Kurikulum Merdeka dipadukan Cambridge Teaching Resources, metode GASING, dan STEM agar anak berpikir kritis dan analitis.',
  },
  {
    icon: 'trophy',
    title: 'Berprestasi',
    desc: 'Setiap anak difasilitasi menemukan bakatnya melalui 18 ekstrakurikuler dan program kokurikuler yang terstruktur.',
  },
  {
    icon: 'moon-star',
    title: 'Qur’ani',
    desc: 'Tahfidz metode Tilawati dengan target minimal 2 juz, ditambah pembiasaan hadits dan doa harian.',
  },
];

export const habits = [
  'Sholat berjamaah tepat waktu',
  'Tilawah & muroja’ah harian',
  'Adab kepada guru dan orang tua',
  'Disiplin waktu & mandiri',
  'Peduli kebersihan lingkungan',
  'Berani tampil & berpendapat',
];
