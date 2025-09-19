/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'firebrick': '#B22222',
        'sugar-glaze': '#FFF2E0',
        'bulgarian-rose': '#3B060A',
      },
      fontFamily: {
        'rampung': ['rampung', 'serif'],
        'bingtea': ['bingtea', 'serif'],
        'komika': ['komika', 'serif'],
        'badaboom': ['badaboom', 'serif'],
        'barber': ['barber', 'serif'],
        'space_comic': ['space_comic', 'serif'],
        'melon-fruit': ['melon-fruit', 'serif'],
        'windsol': ['windsol', 'serif'],
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
        'marquee-reverse': 'marquee-reverse 15s linear infinite',
        'marquee-slow': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }
    },
  },
  plugins: [],
}