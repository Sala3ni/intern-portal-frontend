/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ Looks in all JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
