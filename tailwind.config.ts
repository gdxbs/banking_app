import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        fill: {
          1: "rgba(255, 255, 255, 0.05)", // Reduced opacity for a darker appearance
        },
        bankGradient: "#0062D9", // Darkened blue
        indigo: {
          500: "#4D5AD6", // Darkened
          700: "#2C308F", // Darkened
        },
        success: {
          25: "#E3F7ED", // Darkened
          50: "#D1F4E0", // Darkened
          100: "#A3EAC4", // Darkened
          600: "#02713E", // Darkened green
          700: "#025C31", // Darkened green
          900: "#033B22", // Darkened
        },
        pink: {
          25: "#FCE2F3", // Darkened
          100: "#F9C4E6", // Darkened
          500: "#CC3CA2", // Darkened
          600: "#B21A7C", // Darkened
          700: "#8E0E5D", // Darkened
          900: "#690F46", // Darkened
        },
        blue: {
          25: "#E8F3FF", // Darkened
          100: "#B8DAFF", // Darkened
          500: "#2376E0", // Darkened
          600: "#0F58C9", // Darkened
          700: "#1246A6", // Darkened
          900: "#142E6B", // Darkened
        },
        sky: {
          1: "#E0F1FF", // Darkened
        },
        black: {
          1: "#001836", // Darkened
          2: "#1D2936", // Darkened
        },
        gray: {
          25: "#F8F9FA", // Darkened
          200: "#C7CAD1", // Darkened
          300: "#B0B6C1", // Darkened
          500: "#4A556B", // Darkened
          600: "#323C50", // Darkened
          700: "#232A3A", // Darkened
          900: "#0D1218", // Darkened
        },
      },
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)",
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient":
          "linear-gradient(90deg, #01797A 0%, #489399 100%)",
      },
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "ibm-plex-serif": "var(--font-ibm-plex-serif)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
