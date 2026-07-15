/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060A",
          900: "#0A0C12",
          800: "#10131C",
          700: "#171B26",
          600: "#202535",
        },
        blue: {
          300: "#9DC0FF",
          400: "#6C9BFF",
          500: "#3E7BFA",
          600: "#2F62D6",
          900: "#132348",
        },
        paper: "#F5F7FA",
        muted: "#8C96AC",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(62,123,250,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        drift: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.5" },
          "90%": { opacity: "0.5" },
          "100%": { transform: "translateY(-120vh) rotate(20deg)", opacity: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 13s ease-in-out infinite",
        drift: "drift 16s linear infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};