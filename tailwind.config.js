/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sandybrown: {
          "200": "rgba(255, 175, 84, 0)",
        },
        "accent-yellow": {
          "100": "#feaf53",
        },
        white: "#fff",
        gray: {
          "200": "#0f2137",
          "300": "rgba(255, 255, 255, 0)",
          "400": "rgba(0, 0, 0, 0.5)",
        },
        darkslateblue: {
          "100": "#2256aa",
          "200": "#2256a9",
          "300": "#2f5392",
          "400": "#254887",
        },
        "dark-blue": "#202835",
        peru: "#dd9038",
        darkslategray: "#343d48",
        royalblue: {
          "100": "#135acb",
          "200": "#094db2",
        },
        mediumaquamarine: {
          "100": "#3fdbb1",
          "200": "#25cb9e",
        },
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#dcdfe8",
          "300": "#dbdada",
        },
        cornflowerblue: {
          "100": "#3aa4f1",
          "200": "#25a0ff",
        },
        gold: "#f6c416",
        "grey-white": "#e2e4ea",
        accent: "#457eff",
        "gray-blue": "#676f82",
        black: "#000",
        "studio-darkmode-popuplabels-5e6a86": "#5e6a86",
        "light-background": "#f3f6fd",
        "dark-gray": "#334158",
        lightseagreen: "#00ac92",
        darkorange: "rgba(243, 150, 43, 0.72)",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "dm-sans": "'DM Sans'",
        poppins: "Poppins",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        "text-small": "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        "4xl": "23px",
        xl: "20px",
        "11xl": "30px",
        "41xl": "60px",
        "default-border-raius": "4px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      sm: "14px",
      "17xl": "36px",
      "3xl": "22px",
      mini: "15px",
      "29xl": "48px",
      xs: "12px",
      "21xl": "40px",
      "2xs": "11px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "480px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
