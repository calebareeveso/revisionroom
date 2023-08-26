/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "dm-sans": ['"DM Sans"', "sans-serif"],
      "hi-melody": ['"Hi Melody"', "cursive"],
    },
    fontSize: {
      xs: "0.8rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": ["2.5rem", "2.875rem"],
      "5xl": "3.200rem",
    },
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#398DFF",
        secondary: "#5E5E5E",
        tertiary: "#D9E9FF",
        secondaryBg: "#F5F8FC",
        // tertiaryBg:"",
        white: "#FFFFFF",
        // neutral: "",
      },
      borderRadius: {
        lg: "10px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
