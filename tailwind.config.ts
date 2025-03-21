import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atlas: {
          black: "#0F1115",
          teal: {
            light: "#6FFFC1",
            DEFAULT: "#49E59A",
            dark: "#2CCB82",
          },
          gray: {
            50: "#F8F9FA",
            100: "#F1F3F5",
            200: "#E9ECEF",
            300: "#DEE2E6",
            400: "#CED4DA",
            500: "#ADB5BD",
            600: "#868E96",
            700: "#495057",
            800: "#343A40",
            900: "#212529",
          },
        },
        primary: "#49E59A",
        secondary: "#0F1115",
        background: "#0F1115",
        foreground: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui"],
        display: ["var(--font-space-grotesk)", "system-ui"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top right, rgba(73, 229, 154, 0.15) 0%, rgba(73, 229, 154, 0.05) 50%, rgba(73, 229, 154, 0) 100%)",
        dots: "radial-gradient(circle, rgba(73, 229, 154, 0.15) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 50px -12px rgba(73, 229, 154, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
