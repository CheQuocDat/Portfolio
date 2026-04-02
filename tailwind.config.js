/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0F0F0F',
          secondary: '#1A1A1A',
          card: '#1F1F1F',
          alt: '#121212',
        },
        accent: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
          soft: 'rgba(239,68,68,0.08)',
          glow: 'rgba(239,68,68,0.15)',
        },
        txt: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
      },
    },
  },
  plugins: [],
}
