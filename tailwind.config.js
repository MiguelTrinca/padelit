/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#202835",
          "200": "#0f2137",
          "300": "rgba(255, 255, 255, 0)",
        },
        sandybrown: {
          "100": "#feaf53",
          "200": "rgba(255, 175, 84, 0)",
        },
        peru: "#dd9038",
        darkslategray: "#343d48",
        darkslateblue: {
          "100": "#2256aa",
          "200": "#2256a9",
          "300": "#2f5392",
          "400": "#254887",
        },
        royalblue: "#135acb",
        mediumaquamarine: {
          "100": "#3fdbb1",
          "200": "#25cb9e",
        },
        gainsboro: "#dcdfe8",
        cornflowerblue: "#25a0ff",
        gold: "#f6c416",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "dm-sans": "'DM Sans'",
        poppins: "Poppins",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        "10xs": "3px",
        "4xl": "23px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "66xl": "85px",
      xl: "20px",
      sm: "14px",
      "17xl": "36px",
      "3xl": "22px",
      "7xl": "26px",
      mini: "15px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
