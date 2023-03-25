module.exports = {
  content: ["./app/**/*.{js,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Wilkysta", "serif"],
    },
    extend: {
      colors: {
        primary: "#1E5631",
        secondary: "#f5f2ea",
        danger: "#e45043",
        warning: "#ffcc33",
        success: "#5cb85c",
        dark: "#121212",
        light: "#ffffff",
      },
      minHeight: {
        wrapper: "calc(100vh - 182px)",
      },
      height: {
        wrapper: "calc(100vh - 182px)",
      },
    },
  },
  plugins: [],
};
