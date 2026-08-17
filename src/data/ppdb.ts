/**
 * Data SPMB (Seleksi Penerimaan Murid Baru) TA 2027/2028.
 * Tanggal PLACEHOLDER — samakan dengan SK panitia SPMB sebelum publish.
 *
 * CATATAN: informasi biaya, potongan, dan skema pembayaran bersifat rahasia dan
 * tidak boleh ditampilkan di website. Semua pertanyaan biaya diarahkan ke
 * panitia SPMB lewat WhatsApp. Jangan menambahkan nominal apa pun di berkas ini.
 */

export const waves = [
  {
    name: 'Gelombang 1',
    period: '1 Agustus – 31 Oktober 2026',
    highlight: 'Kuota paling lapang',
    status: 'Dibuka',
    perks: ['Prioritas pilihan kelas', 'Jadwal observasi paling fleksibel', 'Trial class gratis'],
  },
  {
    name: 'Gelombang 2',
    period: '1 November 2026 – 31 Januari 2027',
    highlight: 'Kuota menyesuaikan sisa',
    status: 'Akan datang',
    perks: ['Pendaftaran reguler', 'Observasi terjadwal', 'Trial class gratis'],
  },
  {
    name: 'Gelombang 3',
    period: '1 Februari 2027 – kuota terpenuhi',
    highlight: 'Sesuai ketersediaan kuota',
    status: 'Akan datang',
    perks: ['Pendaftaran reguler', 'Kuota sangat terbatas', 'Menunggu daftar tunggu bila penuh'],
  },
];

export const steps = [
  {
    n: '01',
    icon: 'file-pen',
    title: 'Isi Formulir Pendaftaran',
    desc: 'Daftar online lewat portal SPMB atau datang langsung ke kampus. Butuh sekitar 10 menit.',
  },
  {
    n: '02',
    icon: 'folder-check',
    title: 'Lengkapi Berkas',
    desc: 'Unggah atau serahkan salinan dokumen persyaratan ke panitia SPMB masing-masing jenjang.',
  },
  {
    n: '03',
    icon: 'users',
    title: 'Observasi & Wawancara',
    desc: 'Observasi kesiapan belajar anak dan wawancara orang tua — santai, bukan tes yang menegangkan.',
  },
  {
    n: '04',
    icon: 'badge-check',
    title: 'Pengumuman Hasil',
    desc: 'Hasil disampaikan maksimal 7 hari kerja melalui WhatsApp dan portal SPMB.',
  },
  {
    n: '05',
    icon: 'wallet',
    title: 'Daftar Ulang',
    desc: 'Konfirmasi kesediaan, melengkapi berkas akhir, dan pengukuran seragam di PanataMart.',
  },
  {
    n: '06',
    icon: 'party-popper',
    title: 'Masa Orientasi',
    desc: 'Anak mengikuti masa pengenalan lingkungan sekolah bersama wali kelas dan teman barunya.',
  },
];

export const requirements = [
  {
    unit: 'KB & TK',
    age: 'KB 3–4 th · TK A 4–5 th · TK B 5–6 th (per 1 Juli)',
    docs: [
      'Fotokopi Akta Kelahiran',
      'Fotokopi Kartu Keluarga',
      'Fotokopi KTP kedua orang tua',
      'Pas foto 3×4 sebanyak 3 lembar',
      'Kartu imunisasi (bila ada)',
    ],
  },
  {
    unit: 'SD',
    age: 'Minimal 6 tahun per 1 Juli tahun ajaran berjalan',
    docs: [
      'Fotokopi Akta Kelahiran',
      'Fotokopi Kartu Keluarga',
      'Fotokopi KTP kedua orang tua',
      'Surat keterangan lulus TK / rapor TK B',
      'Pas foto 3×4 sebanyak 3 lembar',
    ],
  },
  {
    unit: 'SMP',
    age: 'Lulusan SD/MI tahun berjalan atau maksimal 1 tahun sebelumnya',
    docs: [
      'Fotokopi Akta Kelahiran & Kartu Keluarga',
      'Fotokopi KTP kedua orang tua',
      'Fotokopi rapor SD kelas 4–6',
      'Fotokopi ijazah / SKL',
      'Pas foto 3×4 sebanyak 3 lembar',
    ],
  },
  {
    unit: 'Panatagama Course',
    age: 'Siswa SD & SMP dari sekolah mana pun',
    docs: [
      'Formulir pendaftaran kursus',
      'Fotokopi kartu pelajar / akta kelahiran',
      'Hasil asesmen diagnostik (dilakukan di tempat)',
    ],
  },
];

export const ppdbFaq = [
  {
    q: 'Apakah pendaftaran bisa dilakukan sepenuhnya secara online?',
    a: 'Bisa. Formulir dan unggah berkas dilakukan melalui portal SPMB. Kehadiran fisik hanya diperlukan saat observasi anak, wawancara orang tua, dan pengukuran seragam.',
  },
  {
    q: 'Apakah ada tes calistung untuk masuk SD?',
    a: 'Tidak ada tes calistung. Kami melakukan observasi kesiapan belajar untuk memetakan kebutuhan pendampingan anak, bukan untuk menyaring atau memberi peringkat.',
  },
  {
    q: 'Berapa lama proses dari pendaftaran sampai pengumuman?',
    a: 'Umumnya sekitar satu sampai dua pekan, tergantung jadwal observasi yang Anda pilih. Hasil disampaikan maksimal 7 hari kerja setelah observasi melalui WhatsApp dan portal SPMB.',
  },
  {
    q: 'Apakah kuota bisa habis sebelum gelombang berakhir?',
    a: 'Bisa. Setiap jenjang punya kuota rombongan belajar yang tetap, dan pendaftaran ditutup begitu kuota terpenuhi meskipun periode gelombang belum selesai. Karena itu kami menganjurkan mendaftar lebih awal.',
  },
  {
    q: 'Bagaimana jika anak berkebutuhan khusus?',
    a: 'Kami menerima dengan pertimbangan kesiapan sekolah dan kebutuhan anak. Silakan berkonsultasi lebih dulu dengan tim bimbingan konseling agar dapat dinilai bersama.',
  },
  {
    q: 'Apakah bisa berkunjung ke sekolah sebelum mendaftar?',
    a: 'Sangat kami anjurkan. Jadwalkan kunjungan lewat WhatsApp, dan tim kami akan mengantar berkeliling melihat kelas serta fasilitas sekolah.',
  },
];
