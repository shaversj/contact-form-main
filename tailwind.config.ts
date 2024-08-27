import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        green: {
          200: "hsl(148, 38%, 91%)",
          600: "hsl(169, 82%, 27%)",
        },
        red: "hsl(0, 66%, 54%)",
        white: "hsl(0, 0%, 100%)",
        grey: {
          500: "hsl(186, 15%, 59%)",
          900: "hsl(187, 24%, 22%)",
        },
      },
      fontFamily: {
        karla: ["var(--font-karla)"],
      },
    },
  },
  plugins: [],
};
export default config;
