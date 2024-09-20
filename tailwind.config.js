module.exports = {
  mode: "aot",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ph: { raw: "(max-width: 640px) and (orientation: portrait)" },
        phl: { raw: "(max-width: 640px) and (orientation: landscape)" },

        tb: {
          raw: "(min-width: 641px) and (max-width: 1024px) and (orientation: portrait)",
        },
        tbl: {
          raw: "(min-width: 641px) and (max-width: 1024px) and (orientation: landscape)",
        },

        lg: {
          raw: "(min-width: 1025px) and (max-width: 1410px) and (min-height: 720px)",
        },
        lgd: {
          raw: "(min-width: 1920px) and (min-height: 1080px) and (min-resolution: 2dppx)",
        },
        ulg: {
          raw: "(min-width: 1441px) and (max-width: 2560px) and (min-height: 1080px)",
        },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
