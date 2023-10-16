module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "1rem": "1rem",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-[#FBEA9F]",
    "bg-[#C7EAF0]",
    "bg-[#ffb763]",
    "bg-[#FCA5A5]",
    "bg-[#E5D9FF]",
    "bg-[#FFCBDE]",
  ],
};
