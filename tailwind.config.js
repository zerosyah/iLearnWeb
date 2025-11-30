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
        roboto: ["Roboto", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        inter: ["Inter"],
        nunito: ["Nunito"],
        montserrat: ["Montserrat"],
      },
      colors: {
        primary: "#504E76",
        secondary: "#C4C3E3",
        tertiary: "#C4E1E2",
        option1: "#A3B565",
        option2: "#FCD09D",
        option3: "#F1642E",
        default: "#F8F8F8",
        indigo: "#A88AED",
        pear: "#CB093B",
        ivory: "hsl(0, 0%, 0%)",
        accent: "#C4E1E2",

        // bgs: "hsl(242, 36%, 83%)",
        // bgsb: "hsl(242, 36%, 88%)",
        // bgtxt: "hsl(242, 36%, 97%)",
        // bgtxtd: "hsl(242, 36%, 95%)",

        pbase: "hsl(242, 36%, 83%)",
        pcard: "hsl(242, 36%, 88%)",
        ptxtl: "hsl(0, 0%, 10%)",
        ptxtd: "hsl(0, 0%, 30%)",

        bga: "hsl(182, 34%, 83%)",
        bgab: "hsl(182, 34%, 88%)",
        bgabs: "hsl(182, 34%, 85%)",
        bgatxt: "hsl(182, 34%, 99%)",
        bgatxtd: "hsl(182, 34%, 95%)",

        sbase: "hsl(182, 34%, 83%)",
        scard: "hsl(182, 34%, 85%)",
        scards: "hsl(182, 34%, 88%)",
        stxtl: "hsl(182, 34%, 99%)",
        stxtd: "hsl(182, 34%, 95%)",
      },
    },
  },
  plugins: [flowbite, scrollbar],
};
