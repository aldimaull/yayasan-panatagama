/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    // Design tokens — bukan skala Tailwind default
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem', xl: '2.5rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1320px' },
    },
    extend: {
      colors: {
        // Primary — hijau tua (islami, teduh, terpercaya)
        primary: {
          50: '#EEF6F2',
          100: '#D6EAE0',
          200: '#ADD5C2',
          300: '#7CB9A0',
          400: '#4B9B7C',
          500: '#22795A',
          600: '#0A593A', // brand
          700: '#084A30',
          800: '#063A26',
          900: '#04281A',
          950: '#021610',
        },
        // Secondary — oranye (CTA)
        secondary: {
          50: '#FEF3ED',
          100: '#FDE2D3',
          200: '#FAC3A7',
          300: '#F69B70',
          400: '#F1763F',
          500: '#EA5B23', // brand
          600: '#CB4514',
          700: '#A63512',
          800: '#812B12',
          900: '#5F2210',
        },
        // Tersier — kuning emas (badge, aksen dekoratif)
        gold: {
          50: '#FEF9E9',
          100: '#FCEFC4',
          200: '#F8DE87',
          300: '#F0C744',
          400: '#E0A600', // brand
          500: '#C48F00',
          600: '#9E7000',
          700: '#785502',
          800: '#5B4108',
          900: '#3E2C06',
        },
        // Netral hangat pendukung
        // Netral hangat — nilai dipilih agar lolos kontras WCAG AA di atas sand-50/putih
        ink: {
          DEFAULT: '#12211B', // 15.4:1
          soft: '#3D5148', // 8.5:1
          muted: '#5C7067', // 5.3:1 (sebelumnya #6C7F76 → 3.7:1, gagal AA)
        },
        sand: {
          50: '#FCFBF8', // off-white halaman
          100: '#F6F4EE',
          200: '#EDE9DF',
          300: '#DFD9CB',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Skala tipografi kustom (fluid clamp) — headline besar ala editorial
        'display-xl': ['clamp(2.75rem, 7.2vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-lg': ['clamp(2.25rem, 5.4vw, 4.25rem)', { lineHeight: '0.98', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-md': ['clamp(1.875rem, 3.8vw, 3rem)', { lineHeight: '1.06', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-sm': ['clamp(1.5rem, 2.6vw, 2.125rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'lead': ['clamp(1.0625rem, 1.35vw, 1.25rem)', { lineHeight: '1.65', letterSpacing: '-0.005em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.16em', fontWeight: '700' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
        blob: '48% 52% 62% 38% / 42% 44% 56% 58%',
      },
      /**
       * Bayangan berlapis. Satu-dua lapis dengan spread negatif besar membuat gradasi
       * berhenti mendadak sehingga tepinya terlihat tegas. Di sini tiap tingkat disusun
       * dari beberapa lapis: blur kira-kira berlipat tiap lapis, alpha per lapis dijaga
       * rendah, dan spread negatif ditahan di bawah ~20% blur agar peluruhannya landai.
       * Warnanya hijau-kehitaman (bukan hitam murni) supaya menyatu dengan palet.
       */
      boxShadow: {
        soft: [
          '0 1px 2px -1px rgb(6 38 26 / 0.05)',
          '0 3px 6px -2px rgb(6 38 26 / 0.05)',
          '0 8px 16px -4px rgb(6 38 26 / 0.05)',
          '0 18px 32px -6px rgb(6 38 26 / 0.05)',
        ].join(', '),
        lift: [
          '0 1px 2px -1px rgb(6 38 26 / 0.06)',
          '0 4px 8px -2px rgb(6 38 26 / 0.06)',
          '0 12px 22px -5px rgb(6 38 26 / 0.07)',
          '0 26px 46px -9px rgb(6 38 26 / 0.07)',
          '0 46px 76px -16px rgb(6 38 26 / 0.06)',
        ].join(', '),
        // Alpha per lapis ditahan rendah supaya hasil komposit tetap setara
        // bayangan lama (~0.45) tapi peluruhannya jauh lebih landai.
        glow: [
          '0 1px 2px -1px rgb(203 69 20 / 0.12)',
          '0 4px 10px -2px rgb(203 69 20 / 0.14)',
          '0 12px 24px -5px rgb(203 69 20 / 0.14)',
          '0 24px 42px -12px rgb(203 69 20 / 0.12)',
        ].join(', '),
        inset: 'inset 0 1px 0 0 rgb(255 255 255 / 0.6)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(180deg, rgba(252,251,248,0) 0%, #FCFBF8 90%)',
        'primary-mesh':
          'radial-gradient(60% 80% at 12% 8%, rgba(34,121,90,0.55) 0%, transparent 60%), radial-gradient(50% 60% at 95% 20%, rgba(224,166,0,0.30) 0%, transparent 65%), radial-gradient(80% 70% at 70% 100%, rgba(4,40,26,0.85) 0%, transparent 70%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        'sheen': {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '100%': { transform: 'translateX(240%) skewX(-18deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 38s linear infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        sheen: 'sheen 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
