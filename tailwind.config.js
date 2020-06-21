module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans-serif"],
      serif: ["Noto Serif JP", "monospace"], // FIXME: replace monosapce with "serif" when prod
    },
    extend: {
      colors: {
        ivory: "#F9FDE9",
        black: "#343434",
        yellow: "#FFE66D",
        lightBlue: "#6CA6C1",
        darkBlue: "#2A2D43",
        cyan: "#C2FFFF",
      },
      fontSize: {
        "7xl": "6rem",
      },
      spacing: {
        "128": "32rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
