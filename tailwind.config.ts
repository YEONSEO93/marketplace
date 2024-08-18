import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
        },
      },
      fontFamily: {
        roboto: "var(--roboto-text)",
        rubik: "var(--rubik-text)",
      },
      borderRadius: {
        lg: "12px",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
