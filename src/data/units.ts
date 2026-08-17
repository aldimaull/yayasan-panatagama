/**
 * Data 5 unit di bawah Yayasan Panatagama.
 * Kurikulum, program, fasilitas, dan jam belajar mengacu pada brosur SPMB 2027/2028.
 *
 * CATATAN: informasi biaya pendidikan sengaja TIDAK disimpan di sini maupun
 * ditampilkan di website — sifatnya rahasia dan hanya disampaikan langsung
 * oleh panitia SPMB. Jangan menambahkan kembali field biaya/harga.
 */

export type Unit = {
  slug: string;
  code: string;
  name: string;
  fullName: string;
  ageRange: string;
  tagline: string;
  summary: string;
  accent: 'primary' | 'secondary' | 'gold';
  cover: string;
  /** Nama berkas logo resmi unit di src/assets (PanataMart belum punya logo) */
  logo?: string;
  campusId: string;
  wa: { label: string; number: string };
  quota: string;
  schedule: { label: string; time: string }[];
  programs: { icon: string; title: string; desc: string }[];
  curriculum: string[];
  facilities: string[];
  extracurricular: string[];
  gallery: string[];
  faq: { q: string; a: string }[];
};

export const units: Unit[] = [
  /* ------------------------------------------------------------------ KB & TK */
  {
    slug: 'kb-tk',
    code: 'KB & TK',
    name: 'KB & TK Cendekia',
    fullName: 'KB & TK Cendekia Panatagama',
    ageRange: 'Usia 3 – 6 tahun',
    tagline: 'Tempat pertama anak jatuh cinta pada belajar',
    summary:
      'Kelompok Bermain dan Taman Kanak-kanak dengan pendekatan bermain bermakna. Anak belajar mengaji, mengenal huruf dan angka, serta membangun kemandirian di lingkungan yang aman, hangat, dan penuh warna.',
    accent: 'gold',
    cover: 'unit-kb-tk',
    logo: 'logo-kb-tk',
    campusId: 'cendekia',
    wa: { label: '0812-2063-6971', number: '6281220636971' },
    quota: '2 kelas KB · 4 kelas TK · maks. 15 anak per kelas',
    schedule: [
      { label: 'KB (Kelompok Bermain)', time: '07.30 – 10.45 WIB' },
      { label: 'TK A & TK B', time: '07.30 – 11.15 WIB' },
      { label: 'Kelas Fullday (opsional)', time: '07.30 – 15.30 WIB' },
    ],
    programs: [
      {
        icon: 'moon-star',
        title: 'Tilawati Pra-Tahfidz',
        desc: 'Pengenalan huruf hijaiyah dengan metode Tilawati, hafalan surat pendek, doa harian, dan hadits pilihan.',
      },
      {
        icon: 'blocks',
        title: 'Playground Indoor & Outdoor',
        desc: 'Area bermain aman untuk melatih motorik kasar dan halus — belajar lewat permainan yang menyenangkan.',
      },
      {
        icon: 'sparkles',
        title: 'Panatagama Habits Forming',
        desc: 'Pembiasaan adab, kemandirian, dan kedisiplinan sejak dini melalui rutinitas harian yang konsisten.',
      },
      {
        icon: 'palette',
        title: 'Sentra Kreativitas',
        desc: 'Cooking day, market day, mewarnai, dan proyek kelas sederhana untuk menumbuhkan rasa ingin tahu.',
      },
      {
        icon: 'languages',
        title: 'Panatagama Language Competences',
        desc: 'Pengenalan kosakata bahasa Inggris dan Arab lewat lagu, cerita, dan permainan.',
      },
      {
        icon: 'stethoscope',
        title: 'Medical & Dental Check Up',
        desc: 'Pemeriksaan kesehatan berkala bekerja sama dengan RS. Hamori, mitra Panatagama Group.',
      },
    ],
    curriculum: [
      'Kurikulum Merdeka untuk PAUD',
      'Program Tahfidz dengan Metode Tilawati',
      'Model pembelajaran berbasis sentra & kelompok',
      'Pengenalan angka dengan Metode GASING',
      'Pembiasaan hadits dan doa harian',
    ],
    facilities: [
      'Ruang kelas full AC',
      'Playground indoor & outdoor',
      'Mushola anak',
      'UKS & perpustakaan mini',
      'CCTV 24 jam',
      'Kantin sehat',
      'Shuttle service',
      'Asuransi siswa',
    ],
    extracurricular: ['Mewarnai', 'Menari', 'Angklung', 'Renang (Aquatic)', 'Keagamaan', 'Drum Band'],
    gallery: ['galeri-01', 'galeri-05', 'galeri-07', 'galeri-03'],
    faq: [
      {
        q: 'Berapa usia minimal masuk KB dan TK?',
        a: 'KB untuk anak usia 3–4 tahun, TK A usia 4–5 tahun, dan TK B usia 5–6 tahun per 1 Juli tahun ajaran berjalan. Untuk kasus khusus, silakan konsultasi dengan tim SPMB.',
      },
      {
        q: 'Apakah ada masa observasi atau trial class?',
        a: 'Ada. Calon peserta didik dapat mengikuti trial class gratis satu hari untuk memastikan anak nyaman dengan suasana sekolah. Jadwalkan lewat WhatsApp unit KB & TK.',
      },
      {
        q: 'Bagaimana jika anak belum lancar berpisah dengan orang tua?',
        a: 'Kami menerapkan masa adaptasi bertahap dua minggu pertama. Wali kelas berkomunikasi harian dengan orang tua sampai anak benar-benar siap.',
      },
    ],
  },

  /* ---------------------------------------------------------------------- SD */
  {
    slug: 'sd',
    code: 'SD',
    name: 'SD Panatagama',
    fullName: 'SD Panatagama Islamic School',
    ageRange: 'Kelas 1 – 6',
    tagline: 'Fondasi akhlak, literasi, dan logika yang kuat',
    summary:
      'Sekolah dasar Islam terakreditasi A dengan pembelajaran fullday. Memadukan Kurikulum Merdeka, Cambridge Teaching Resources, tahfidz Tilawati, dan Expert Mathematic Curriculum agar anak tumbuh percaya diri dan gemar berpikir.',
    accent: 'primary',
    cover: 'unit-sd',
    logo: 'logo-sd',
    campusId: 'darmodihardjo',
    wa: { label: '0812-2279-6135', number: '6281222796135' },
    quota: '4 rombel per angkatan · maks. 24 siswa per kelas',
    schedule: [
      { label: 'SD Kelas 1 – 2', time: '07.00 – 14.15 WIB' },
      { label: 'SD Kelas 3 – 6', time: '07.00 – 15.15 WIB' },
      { label: 'Sabtu', time: 'Libur / kegiatan ekstrakurikuler pilihan' },
    ],
    programs: [
      {
        icon: 'moon-star',
        title: 'Tahfidz Target 2 Juz',
        desc: 'Program tahfidz metode Tilawati dengan target hafalan minimal 2 juz saat lulus, disertai tasmi’ dan khotmil Qur’an.',
      },
      {
        icon: 'calculator',
        title: 'Expert Mathematic Curriculum (EMC)',
        desc: 'Matematika dengan Metode GASING — gampang, asyik, menyenangkan — untuk membangun nalar kritis dan analitis.',
      },
      {
        icon: 'languages',
        title: 'CLIL & Cambridge Assessment',
        desc: 'Bahasa Inggris berbasis Content Language Integrated Learning, disiapkan mengikuti Cambridge Assessment English.',
      },
      {
        icon: 'code',
        title: 'Computer & Coding for Children',
        desc: 'Coding project terstruktur di lab komputer untuk membentuk generasi kreatif dan cerdas digital.',
      },
      {
        icon: 'flask',
        title: 'STEM & Mini Research Project',
        desc: 'Belajar lintas disiplin lewat percobaan sains dan riset kecil yang dipresentasikan di Commencement Day.',
      },
      {
        icon: 'wallet',
        title: 'Financial Literacy Project',
        desc: 'Market day dan proyek literasi finansial untuk mengenalkan konsep uang, amanah, dan kewirausahaan.',
      },
    ],
    curriculum: [
      'Kurikulum Merdeka & Kurikulum Satuan Pendidikan',
      'Program Tahfidz dengan Metode Tilawati',
      'Cambridge Teaching Resources',
      'Program Matematika dengan Metode GASING',
      'STEM-based Learning',
      'Flipped Classroom Learning Model',
      'English berbasis Content Language Integrated Learning (CLIL)',
    ],
    facilities: [
      'Ruang kelas full AC & integrated classroom',
      'Lab. komputer & sains teknologi',
      'Multimedia room',
      'Swimming pool',
      'Sport arena',
      'Perpustakaan & UKS',
      'Mushola',
      'Technology Integrated Card',
      'Shuttle service & asuransi siswa',
    ],
    extracurricular: [
      'Pramuka',
      'Dokter Kecil',
      'Futsal',
      'Basket',
      'Renang',
      'Karate',
      'Taekwondo',
      'Tari',
      'Angklung',
      'Drum Band',
      'Hadroh',
      'Coding',
      'Paskibra',
      'PMR',
    ],
    gallery: ['galeri-02', 'galeri-04', 'galeri-06', 'galeri-08'],
    faq: [
      {
        q: 'Apakah SD Panatagama sudah terakreditasi?',
        a: 'Ya, Panatagama Islamic School terakreditasi A oleh BAN-PDM dan menerapkan Kurikulum Nasional serta National Plus Curriculum.',
      },
      {
        q: 'Apakah makan siang disediakan sekolah?',
        a: 'Ya. Program fullday dilengkapi makan siang bergizi dan snack yang disiapkan kantin sehat sekolah dengan menu bergilir mingguan.',
      },
      {
        q: 'Bagaimana sekolah melaporkan perkembangan anak?',
        a: 'Selain rapor semester, ada Home Visit & Parenting Program, konsultasi wali kelas, dan laporan capaian tahfidz berkala kepada orang tua.',
      },
    ],
  },

  /* --------------------------------------------------------------------- SMP */
  {
    slug: 'smp',
    code: 'SMP',
    name: 'SMP Panatagama',
    fullName: 'SMP Panatagama Islamic School',
    ageRange: 'Kelas 7 – 9',
    tagline: 'Menyiapkan pemimpin muda rahmatan lil ’alamin',
    summary:
      'Jenjang menengah pertama yang menempa kemandirian berpikir, kepemimpinan, dan kematangan spiritual. Siswa dibekali riset, literasi digital, dan kemampuan berbahasa untuk melanjutkan ke SMA terbaik.',
    accent: 'secondary',
    cover: 'unit-smp',
    logo: 'logo-smp',
    campusId: 'darmodihardjo',
    wa: { label: '0813-2627-0203', number: '6281326270203' },
    quota: '3 rombel per angkatan · maks. 26 siswa per kelas',
    schedule: [
      { label: 'Senin – Jumat', time: '07.00 – 15.25 WIB' },
      { label: 'Kajian Ta’lim Muta’alim', time: 'Setiap Selasa & Kamis' },
      { label: 'Lailatul Ijtima’', time: 'Sebulan sekali (menginap di sekolah)' },
    ],
    programs: [
      {
        icon: 'compass',
        title: 'Future Leaders’ Camp',
        desc: 'Pelatihan kepemimpinan, public speaking, dan manajemen organisasi untuk membentuk karakter pemimpin.',
      },
      {
        icon: 'moon-star',
        title: 'Tahfidz & Dauroh Qur’an',
        desc: 'Melanjutkan target hafalan dengan metode Tilawati, tasmi’, dan dauroh intensif pada momen tertentu.',
      },
      {
        icon: 'microscope',
        title: 'Rihlah Ilmiah & Mini Research',
        desc: 'Riset lapangan dan kunjungan ilmiah yang dipresentasikan secara ilmiah di akhir semester.',
      },
      {
        icon: 'languages',
        title: 'Cambridge Assessment English',
        desc: 'Pendampingan menuju sertifikasi bahasa Inggris internasional dan penguatan bahasa Arab.',
      },
      {
        icon: 'map',
        title: 'Odyssey Plan',
        desc: 'Program pemetaan minat, bakat, dan rencana studi lanjut agar siswa punya arah sejak dini.',
      },
      {
        icon: 'code',
        title: 'Coding & Digital Project',
        desc: 'Proyek teknologi terapan — dari web sederhana hingga automasi — di lab komputer sekolah.',
      },
    ],
    curriculum: [
      'Kurikulum Merdeka & Kurikulum Satuan Pendidikan',
      'Program Tahfidz dengan Metode Tilawati',
      'Cambridge Teaching Resources & National Plus Curriculum',
      'STEM-based Learning & project-based assessment',
      'Flipped Classroom Learning Model',
      'Kajian Ta’lim Muta’alim (adab menuntut ilmu)',
    ],
    facilities: [
      'Integrated classroom full AC',
      'Lab. komputer & sains teknologi',
      'Student center',
      'Sport arena & swimming pool',
      'Hall room untuk kegiatan besar',
      'Perpustakaan & UKS',
      'Mushola',
      'Shuttle service & asuransi siswa',
    ],
    extracurricular: [
      'Pramuka (Gema Pramuka)',
      'Paskibra',
      'PMR',
      'Basket',
      'Futsal',
      'Renang',
      'Karate',
      'Taekwondo',
      'Hadroh',
      'Drum Band',
      'Coding',
      'English Club',
    ],
    gallery: ['galeri-09', 'galeri-02', 'galeri-10', 'galeri-06'],
    faq: [
      {
        q: 'Apakah SMP Panatagama menyediakan asrama?',
        a: 'Saat ini SMP Panatagama adalah sekolah fullday non-asrama. Tersedia shuttle service untuk beberapa rute di dalam Kota Subang.',
      },
      {
        q: 'Bagaimana persiapan siswa untuk melanjutkan ke SMA?',
        a: 'Melalui Odyssey Plan, siswa dipetakan minat dan bakatnya sejak kelas 8, lalu didampingi memilih jalur SMA/SMK/pondok yang sesuai.',
      },
      {
        q: 'Apakah menerima siswa pindahan?',
        a: 'Menerima, sesuai ketersediaan kuota kelas dan hasil placement test. Silakan hubungi WhatsApp unit SMP untuk pengecekan kuota.',
      },
    ],
  },

  /* ------------------------------------------------------------------ COURSE */
  {
    slug: 'course',
    code: 'Course',
    name: 'Panatagama Course',
    fullName: 'Panatagama Course — Bimbel & Kursus',
    ageRange: 'SD – SMP · Umum',
    tagline: 'Pendampingan belajar, di luar jam sekolah',
    summary:
      'Unit bimbingan belajar dan kursus yang terbuka untuk siswa Panatagama maupun umum. Kelas kecil, pengajar terlatih, dan materi yang menyambung langsung dengan kebutuhan sekolah maupun persiapan ujian.',
    accent: 'gold',
    cover: 'unit-course',
    logo: 'logo-course',
    campusId: 'darmodihardjo',
    wa: { label: '0851-7953-8448', number: '6285179538448' },
    quota: 'Maks. 8 peserta per kelas · terbuka untuk umum',
    schedule: [
      { label: 'Kelas sore (Senin–Kamis)', time: '15.30 – 17.00 WIB' },
      { label: 'Kelas akhir pekan', time: 'Sabtu, 08.00 – 11.00 WIB' },
      { label: 'Privat / kelompok kecil', time: 'Jadwal menyesuaikan' },
    ],
    programs: [
      {
        icon: 'calculator',
        title: 'Matematika GASING',
        desc: 'Kelas matematika dengan metode GASING untuk siswa SD & SMP — dari konsep dasar hingga persiapan olimpiade.',
      },
      {
        icon: 'languages',
        title: 'English & Arabic Club',
        desc: 'Kelas percakapan dan persiapan Cambridge Assessment English, serta dasar bahasa Arab.',
      },
      {
        icon: 'moon-star',
        title: 'Tahsin & Tahfidz Tilawati',
        desc: 'Perbaikan bacaan Al-Qur’an dan pendampingan hafalan untuk anak maupun orang tua.',
      },
      {
        icon: 'code',
        title: 'Coding for Kids',
        desc: 'Kelas coding visual hingga web dasar, dirancang bertahap sesuai usia peserta.',
      },
      {
        icon: 'graduation-cap',
        title: 'Persiapan Ujian & Seleksi',
        desc: 'Intensif menghadapi asesmen sekolah, ujian kenaikan, dan seleksi masuk jenjang berikutnya.',
      },
      {
        icon: 'users',
        title: 'Kelas Privat di Rumah',
        desc: 'Opsi pendampingan privat dengan pengajar Panatagama untuk area dalam Kota Subang.',
      },
    ],
    curriculum: [
      'Materi selaras Kurikulum Merdeka',
      'Metode GASING untuk matematika',
      'Modul Cambridge untuk bahasa Inggris',
      'Asesmen diagnostik di awal program',
      'Laporan perkembangan bulanan ke orang tua',
    ],
    facilities: [
      'Ruang kelas kecil full AC',
      'Lab. komputer untuk kelas coding',
      'Perpustakaan referensi',
      'Modul & lembar kerja cetak',
      'Area tunggu orang tua',
    ],
    extracurricular: ['Klub Olimpiade Matematika', 'Klub Sains', 'Public Speaking', 'Storytelling'],
    gallery: ['galeri-04', 'galeri-08', 'galeri-01', 'galeri-10'],
    faq: [
      {
        q: 'Apakah harus siswa Panatagama untuk ikut kursus?',
        a: 'Tidak. Panatagama Course terbuka untuk siswa dari sekolah mana pun, selama kuota kelas masih tersedia.',
      },
      {
        q: 'Bagaimana cara menentukan kelas yang tepat?',
        a: 'Setiap peserta baru mengikuti asesmen diagnostik singkat gratis, lalu ditempatkan pada level yang sesuai kemampuannya.',
      },
      {
        q: 'Apakah bisa trial satu pertemuan?',
        a: 'Bisa. Tersedia satu kali pertemuan percobaan gratis sebelum memutuskan mendaftar penuh.',
      },
    ],
  },

  /* -------------------------------------------------------------- PANATAMART */
  {
    slug: 'panatamart',
    code: 'PanataMart',
    name: 'PanataMart',
    fullName: 'PanataMart — Unit Usaha Yayasan',
    ageRange: 'Terbuka untuk umum',
    tagline: 'Belanja kebutuhan sekolah, manfaatnya kembali ke sekolah',
    summary:
      'Unit usaha sekaligus koperasi yayasan yang menyediakan seragam, perlengkapan sekolah, dan kebutuhan harian. Keuntungan dikelola kembali untuk mendukung program pendidikan dan kegiatan siswa Panatagama.',
    accent: 'secondary',
    cover: 'unit-panatamart',
    campusId: 'darmodihardjo',
    wa: { label: '0851-7953-8448', number: '6285179538448' },
    quota: 'Melayani wali murid & masyarakat umum',
    schedule: [
      { label: 'Senin – Jumat', time: '07.00 – 16.00 WIB' },
      { label: 'Sabtu', time: '08.00 – 14.00 WIB' },
      { label: 'Ahad & hari libur', time: 'Tutup' },
    ],
    programs: [
      {
        icon: 'shirt',
        title: 'Seragam Resmi Sekolah',
        desc: 'Seragam harian, olahraga, dan atribut lengkap semua jenjang dengan ukuran terjaga stoknya.',
      },
      {
        icon: 'book-open',
        title: 'Buku & Alat Tulis',
        desc: 'Buku pelajaran, modul Tilawati, dan perlengkapan tulis dengan harga khusus wali murid.',
      },
      {
        icon: 'shopping-basket',
        title: 'Sembako & Kebutuhan Harian',
        desc: 'Bahan pokok dan kebutuhan rumah tangga untuk memudahkan wali murid saat menjemput anak.',
      },
      {
        icon: 'utensils',
        title: 'Snack & Katering Sehat',
        desc: 'Produk makanan sehat yang lolos kurasi kantin sekolah, bebas pengawet berlebih.',
      },
      {
        icon: 'credit-card',
        title: 'Pembayaran Non-Tunai',
        desc: 'Terintegrasi dengan Technology Integrated Card siswa serta menerima QRIS dan transfer bank.',
      },
      {
        icon: 'heart-handshake',
        title: 'Dana Sosial Yayasan',
        desc: 'Sebagian keuntungan dialokasikan untuk kegiatan siswa dan program sosial yang dijalankan yayasan.',
      },
    ],
    curriculum: [
      'Harga khusus untuk wali murid Panatagama',
      'Kurasi produk halal dan aman untuk anak',
      'Sistem stok terintegrasi dengan kebutuhan sekolah',
      'Laporan keuangan transparan ke yayasan',
    ],
    facilities: [
      'Toko ber-AC di area Kampus 2',
      'Area fitting seragam',
      'Layanan pesan antar dalam kota',
      'Pembayaran QRIS & transfer',
      'Parkir luas',
    ],
    extracurricular: [],
    gallery: ['galeri-07', 'galeri-03', 'galeri-05', 'galeri-09'],
    faq: [
      {
        q: 'Apakah PanataMart hanya untuk wali murid?',
        a: 'Tidak. Masyarakat umum dipersilakan berbelanja. Harga khusus berlaku untuk wali murid dengan menunjukkan kartu siswa.',
      },
      {
        q: 'Bisakah memesan seragam dari luar kota?',
        a: 'Bisa. Pemesanan dapat dilakukan lewat WhatsApp dan dikirim melalui ekspedisi dengan ongkos kirim ditanggung pembeli.',
      },
      {
        q: 'Apakah ada layanan tukar ukuran seragam?',
        a: 'Ada, maksimal 7 hari setelah pembelian selama label dan kemasan masih utuh serta belum dipakai.',
      },
    ],
  },
];

export const schoolUnits = units.filter((u) => u.slug !== 'panatamart');

export function getUnit(slug: string): Unit {
  const unit = units.find((u) => u.slug === slug);
  if (!unit) throw new Error(`Unit tidak ditemukan: ${slug}`);
  return unit;
}

/** Kegiatan kokurikuler tingkat yayasan (brosur SPMB) */
export const cocurricular = [
  'Tasmi’',
  'Khotmil Qur’an',
  'Ramadhan Class',
  'Lailatul Ijtima’',
  'Expert Arrival',
  'Rihlah Ilmiah',
  'STEM Education',
  'Mini Research Project',
  'Financial Literacy Project',
  'Odyssey Plan',
  'Commencement Day',
  'Coding Project',
  'Medical & Dental Check Up',
  'Future Leaders’ Camp',
  'Cambridge Assessment English',
  'Home Visit & Parenting',
  'Kajian Ta’lim Muta’alim',
  'Akhirussanah',
  'Aquatic',
  'Class Meeting',
  'Special Day',
  'Gema Pramuka',
  'Qur’anic Class',
  'Fun Fest',
  'Edu Trip',
  'Dauroh Qur’an',
  'Cooking & Market Day',
];
