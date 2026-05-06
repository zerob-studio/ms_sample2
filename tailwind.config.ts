import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0b0d',
        surface: '#101216',
        surface2: '#15181d',
        border: '#1c2026',
        hairline: '#23272f',
        ink: '#f2f4f7',
        muted: '#7c8593',
        subtle: '#5a6370',
        accent: {
          DEFAULT: '#7aa2f7',
          hover: '#9bb9fa',
          soft: 'rgba(122,162,247,0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        kr: ['var(--font-noto-sans-kr)', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1s ease-out both',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
