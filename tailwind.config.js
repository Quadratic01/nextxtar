/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#05A30B",
          alt: "#003018"
        },
        secondary: "#F2F2F2",
        black: {
          "100": "#000000",
          "90": "#262626",
          "80": "#434343",
          "70": "#555555",
          "60": "#7B7B7B",
        },
        gray: {
          "1": "#333333",
          "2": "#4F4F4F",
          "3": "#828282",
          "4": "#BDBDBD",
          "5": "#E0E0E0",
          "6": "#F2F2F2",
          "7": "#F6F6F6",
          "8": "#FFFFFF",
        },
        info: "#2F80ED",
        success: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

