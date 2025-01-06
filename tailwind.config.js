// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // Mengaktifkan dark mode dengan kelas
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Biru tua
        secondary: "#3B82F6", // Biru medium
        accent: "#F59E0B", // Kuning
      },
    },
  },
  plugins: [],
};
