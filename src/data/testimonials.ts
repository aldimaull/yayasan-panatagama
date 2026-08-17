/**
 * Testimoni wali murid — PLACEHOLDER.
 * Ganti dengan kutipan asli beserta izin publikasi & foto sebelum publish.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  unit: 'kb-tk' | 'sd' | 'smp' | 'course' | 'panatamart' | 'umum';
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Yang paling terasa itu perubahan adabnya. Anak saya jadi terbiasa salim, minta izin sebelum pergi, dan sholat tanpa disuruh. Pelajaran memang penting, tapi akhlak yang kami cari, dan Panatagama benar-benar menggarap itu.',
    name: 'Ibu Rini Haryanti',
    role: 'Wali murid SD kelas 4',
    unit: 'sd',
    initials: 'RH',
  },
  {
    quote:
      'Awalnya saya ragu menitipkan anak fullday. Ternyata gurunya rajin mengabari perkembangan lewat grup, ada home visit juga. Sekarang anak saya malah betah dan cerita terus tentang proyek kelasnya.',
    name: 'Bapak Ahmad Fauzan',
    role: 'Wali murid SD kelas 2',
    unit: 'sd',
    initials: 'AF',
  },
  {
    quote:
      'Anak saya masuk TK belum bisa berpisah sama saya, nangis tiap pagi. Dua minggu didampingi wali kelas, sekarang dia yang buru-buru minta berangkat. Hafalan surat pendeknya juga sudah banyak.',
    name: 'Ibu Nurul Aisyah',
    role: 'Wali murid TK B',
    unit: 'kb-tk',
    initials: 'NA',
  },
  {
    quote:
      'Future Leaders’ Camp mengubah anak saya yang tadinya pemalu jadi berani memimpin presentasi. Sekarang dia jadi ketua kelas dan aktif di Pramuka.',
    name: 'Bapak Deni Kurniawan',
    role: 'Wali murid SMP kelas 8',
    unit: 'smp',
    initials: 'DK',
  },
  {
    quote:
      'Target hafalannya jelas dan ada laporannya. Kami di rumah jadi ikut terbantu memantau muroja’ah anak. Alhamdulillah, sebelum lulus SD hafalannya lebih dari target.',
    name: 'Ibu Siti Maesaroh',
    role: 'Wali murid SD kelas 6',
    unit: 'sd',
    initials: 'SM',
  },
  {
    quote:
      'Saya ikutkan anak ke Panatagama Course untuk matematika. Metodenya beda, tidak menghafal rumus tapi paham konsep. Nilainya naik, dan yang lebih penting dia tidak takut lagi sama matematika.',
    name: 'Ibu Yuliana Dewi',
    role: 'Orang tua peserta Course',
    unit: 'course',
    initials: 'YD',
  },
  {
    quote:
      'Fasilitasnya lengkap untuk ukuran sekolah di Subang. Kolam renang, lab komputer, sport arena. Anak saya paling senang program aquatic dan coding.',
    name: 'Bapak Rizal Maulana',
    role: 'Wali murid SMP kelas 7',
    unit: 'smp',
    initials: 'RM',
  },
  {
    quote:
      'Belanja seragam dan buku jadi praktis, tinggal mampir waktu menjemput anak. Harganya juga lebih ringan untuk wali murid.',
    name: 'Ibu Fitri Handayani',
    role: 'Wali murid & pelanggan PanataMart',
    unit: 'panatamart',
    initials: 'FH',
  },
];

export function testimonialsFor(unit: Testimonial['unit'], count = 3): Testimonial[] {
  const matched = testimonials.filter((t) => t.unit === unit);
  const rest = testimonials.filter((t) => t.unit !== unit);
  return [...matched, ...rest].slice(0, count);
}
