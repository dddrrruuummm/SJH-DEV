import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071014",
        pearl: "#edf4ef",
        blush: "#baf500",
        wine: "#00b7b2",
        brass: "#baf500",
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
