import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy & Cream (locked palette) — bg/surface/accent/contrast
        bg: "#FAF6EE", // cream — page background
        surface: "#E8DFCF", // sand — raised surfaces
        primary: "#1F3252", // deep navy — brand accent, buttons, eyebrows
        accent: "#1F3252", // deep navy
        ink: "#0E1C33", // darkest navy — primary text + dark sections
        "bg-contrast": "#0E1C33",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
