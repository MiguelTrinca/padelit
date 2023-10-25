/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        
        border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        


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

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
      "2xs": "11px",
      xs: "12px",
      sm: "14px",
      mini: "15px",
      base: "16px",
      "base-8": "16.8px",
      lg: "18px",
      xl: "20px",
      "3xl": "22px",
      "5xl": "24px",
      "17xl": "36px",
      "21xl": "40px",
      "29xl": "48px",
      "50x1": "50px",
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
  plugins: [require("tailwindcss-animate")],
};
