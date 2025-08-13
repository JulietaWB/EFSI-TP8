module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#04263f", /* azul oscuro principal */
          dark: "#031826",
          light: "#0b3a5b"
        },
        surface: {
          DEFAULT: "#f7f9fb",
          muted: "#f1f5f9"
        }
      },
      boxShadow: {
        card: "0 6px 18px rgba(2,6,23,0.12)"
      }
    },
  },
  plugins: [],
};
