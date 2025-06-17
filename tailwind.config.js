// tailwind.config.js
module.exports = {
  // ← content 省略
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
