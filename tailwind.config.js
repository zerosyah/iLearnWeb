import flowbite from "flowbite/plugin";
import scrollbar from "tailwind-scrollbar-hide"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        bigelowRules: ["Bigelow Rules", "cursive"],
        robot: ["Roboto", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [flowbite, scrollbar],
};
