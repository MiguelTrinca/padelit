/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#202835",
        "grey-white": "#e2e4ea",
        white: "#fff",
        accent: "#457eff",
        royalblue: {
          "100": "#135acb",
          "200": "#094db2",
        },
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#dcdfe8",
          "300": "#dbdada",
        },
        "gray-blue": "#676f82",
        darkslategray: "#343d48",
        black: "#000",
        "studio-darkmode-popuplabels-5e6a86": "#5e6a86",
        "light-background": "#f3f6fd",
        "dark-gray": "#334158",
        lightseagreen: "#00ac92",
        "accent-yellow": "#feaf53",
        "hover-yellow": "#c47923",
        peru: {
          "100": "#dd9038",
          "200": "#c47923",
        },
        gray: {
          "200": "#0f2137",
          "300": "rgba(255, 255, 255, 0)",
          "400": "rgba(0, 0, 0, 0.5)",
        },
        sandybrown: "rgba(255, 175, 84, 0)",
        darkslateblue: {
          "100": "#2256aa",
          "200": "#2256a9",
          "300": "#2f5392",
          "400": "#254887",
        },
        mediumaquamarine: {
          "100": "#3fdbb1",
          "200": "#25cb9e",
        },
        cornflowerblue: {
          "100": "#3aa4f1",
          "200": "#25a0ff",
        },
        gold: "#f6c416",
        darkorange: "rgba(243, 150, 43, 0.72)",
        "bad-red": "#f4485d",
      },
      spacing: {},
      fontFamily: {
        "text-small": "Inter",
        inter: "Inter",
        roboto: "Roboto",
        montserrat: "Montserrat",
        "dm-sans": "'DM Sans'",
        poppins: "Poppins",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
      },
      borderRadius: {
        "smi-2": "12.2px",
        xl: "20px",
        "11xl": "30px",
        "5xs": "8px",
        "3xs": "10px",
        "31xl": "50px",
        "4xl": "23px",
        "41xl": "60px",
        "default-border-raius": "4px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "base-8": "16.8px",
      xs: "12px",
      mini: "15px",
      "29xl": "48px",
      sm: "14px",
      lg: "18px",
      "21xl": "40px",
      "2xs": "11px",
      "17xl": "36px",
      "3xl": "22px",
      "5xl": "24px",
      inherit: "inherit",
      "50x1": "50px",
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
