/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add your custom font
      },
      colors: {
        primary: {
          DEFAULT: "#3b44f6", // Primary color (blue-700)
          light: "#3B82F6", // Lighter shade (blue-500)
          dark: "#6babf8", // Darker shade (blue-800)
        }}
    },
  },
  plugins: [],
}