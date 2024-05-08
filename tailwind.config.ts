import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out forwards'
      },
      keyframes: {
        'fade-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1'}
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ {
      customDark: {
        "primary": "#ffffff",
        "secondary": "#e11d48",
        "accent": "#d1d5db",
        "neutral": "#2a2929",
        "base-100": "#121212",
        "info": "#2563eb",
        "success": "#00ff00",
        "warning": "#00ff00",
        "error": "#ff0000",
      },
      customLight: {
        "primary": "#000000",
        "secondary": "#e11d48",
        "accent": "#00ffff",
        "neutral": "#ffffff",
        "base-100": "#ffffff",
        "info": "#2563eb",
        "success": "#00ff00",
        "warning": "#00ff00",
        "error": "#ff0000",
      },



    }],
  },
};
export default config;
