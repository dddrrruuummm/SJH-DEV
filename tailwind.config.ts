import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#213e35",
        pearl: "#f6f7f2",
        blush: "#e6ece2",
        wine: "#284d42",
        brass: "#e6ece2",
        mist: "#d9ece4"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 183, 178, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
