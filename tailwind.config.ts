import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        putty: "#c4c3b6",
        ink: "#000000",
        bone: "#e7e5e4",
        chalk: "#ebebeb",
        vellum: "#dfdcd5",
        graphite: "#595855",
        ash: "#808080",
        paper: "#ffffff",
      },
      fontFamily: {
        // Davinci substitute — display serif
        display: ["var(--font-davinci)", "serif"],
        // Helvetica Now substitute — utility grotesk
        body: ["var(--font-helvetica-now)", "sans-serif"],
      },
      fontSize: {
        micro: ["9px", { lineHeight: "1.5" }],
        caption: ["12px", { lineHeight: "1.5" }],
        "body-sm": ["15px", { lineHeight: "1.5" }],
        base: ["16px", { lineHeight: "1.5" }],
        subheading: ["22px", { lineHeight: "1.33", letterSpacing: "-0.11px" }],
        "heading-2xs": ["24px", { lineHeight: "1.33" }],
        "heading-xs": ["26px", { lineHeight: "1.33", letterSpacing: "-0.13px" }],
        "heading-sm": ["34px", { lineHeight: "1.2", letterSpacing: "-0.15px" }],
        heading: ["43px", { lineHeight: "1.1", letterSpacing: "-0.215px" }],
        "heading-lg": ["52px", { lineHeight: "1", letterSpacing: "-0.47px" }],
        "heading-xl": ["94px", { lineHeight: "0.84", letterSpacing: "-0.85px" }],
        display: ["374px", { lineHeight: "0.84", letterSpacing: "-3.37px" }],
      },
      borderRadius: {
        card: "9px",
        link: "2px",
        pill: "28.8px",
      },
      spacing: {
        section: "80px",
        card: "24px",
      },
      boxShadow: {
        none: "none",
      },
      letterSpacing: {
        label: "0.16em",
      },
    },
  },
  plugins: [],
};

export default config;
