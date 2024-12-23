/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pop-semi": ["Poppins"],
      },
      fontSize: {
        base: "12px",
        heading: "24px",
      },
      fontWeight: {
        base: "500px",
      }
    },
    colors: {
      primary: "var(--text-primary-color)",
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".custom-header": {
          display: "flex",
          "font-size": "12px !important",
          "align-items": "center",
          "justify-content": "space-between",
          "border-bottom": "1px solid #E6E8EC",
          height: "var(--custom-header-height)",
          backgroundColor: "var(--custom-header-background-color)",
        },
        ".custom-input, .custom-input:hover, .custom-input:focus, .custom-input:active":
          {
            color: "#B1B5C3 !important",
            border: "none !important",
            "font-size": "12px !important",
            "box-shadow": "none !important",
            backgroundColor: "#F4F5F6 !important",
            "borader-radius": "8px",
            height: "var(--input-height)",
          },
      });
    },
  ],
};
