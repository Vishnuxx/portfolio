/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        intro: {
          "0%": {
            visibility: "hidden",
            filter: "blur(10px)",
            webkitTransform: "scale(4)",
            transform: "scale(4)",
            letterSpacing: "9px",
          },
          "200ms": {
            visibility: "visible",
          },
          "25%": {
            filter: "blur(2px)",
            webkitTransform: "scale(1.2)",
            transform: "scale(1.2)",
          },
          "100%": {
            filter: "blur(0px)",
            webkitTransform: "scale(1)",
            transform: "scale(1)",
            letterSpacing: "0px",
          },
        },
      },
      animation: {
        intro: "intro 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 200ms both ",
      },
    },
  },
  plugins: [],
};
