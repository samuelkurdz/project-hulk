/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        sideMain: "240px 1fr",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      spacing: {
        4.5: "1.125rem",
        13: "3.25rem",
        18: "4.5rem",
        25: "6.25rem",
        50: "12.5rem",
        100: "25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
