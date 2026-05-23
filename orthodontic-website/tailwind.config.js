/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0284C7",
          on: "#FFFFFF",
          dark: "#0369A1",
          light: "#38BDF8",
        },
        secondary: "#0EA5E9",
        accent: {
          DEFAULT: "#059669",
          dark: "#047857",
        },
        ink: "#0F172A",
        muted: "#EFF7FB",
        line: "#E0F0F8",
        canvas: "#F0F9FF",
        danger: "#DC2626",
      },
      fontFamily: {
        display: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Noto Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(2,132,199,0.18)",
        card: "0 1px 3px rgba(15,23,42,0.06), 0 12px 32px -16px rgba(2,132,199,0.22)",
        lift: "0 18px 48px -20px rgba(2,132,199,0.40)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
