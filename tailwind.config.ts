import { Sidebar } from "lucide-react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Sidebar: {
          active: "#6b32ec",
          background: "#f5f5f5",
          foreground: "#636c80",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
