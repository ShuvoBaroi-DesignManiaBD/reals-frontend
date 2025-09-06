import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "dark"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Custom Color Palette from Figma
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: "#109AFC", // Main blue
          50: "#EBF8FF",
          100: "#BEE3F8",
          200: "#90CDF4",
          300: "#63B3ED",
          400: "#4299E1",
          500: "#109AFC",
          600: "#0E87E0",
          700: "#0C75C4",
          800: "#0A63A8",
          900: "#08518C",
        },
        secondary: {
          DEFAULT: "#C347FC", // Purple accent
          50: "#FAF5FF",
          100: "#E9D8FD",
          200: "#D6BCFA",
          300: "#C347FC",
          400: "#B794F6",
          500: "#9F7AEA",
          600: "#805AD5",
          700: "#6B46C1",
          800: "#553C9A",
          900: "#44337A",
        },
        success: {
          DEFAULT: "#1FE886", // Green
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#1FE886",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
        neutral: {
          DEFAULT: "#131313", // Dark text
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EAEAEA",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#131313",
        },
        // Semantic Colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      // Typography System from Figma
      fontSize: {
        // Heading Styles
        "heading-xl": ["60px", { lineHeight: "66px", fontWeight: "700" }], // Heading 60/11
        "heading-lg": ["44px", { lineHeight: "48px", fontWeight: "600" }], // Heading 2 44/11
        "heading-md": ["26px", { lineHeight: "32px", fontWeight: "600" }], // Subheading 26/11
        "heading-sm": ["20px", { lineHeight: "28px", fontWeight: "500" }], // Subheading 2 25/11

        // Body Text Styles
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }], // Paragraph text (Body) 18/14
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }], // Button text 16/11
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }], // Paragraph 2 20/14

        // Small Text
        caption: ["13px", { lineHeight: "18px", fontWeight: "400" }], // Label text 13/11
        small: ["12px", { lineHeight: "16px", fontWeight: "400" }], // Small text
      },
      // Font Families
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      // Spacing Scale
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
      },
      // Border Radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Animation and Transitions
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
      },
      // Gradients
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #109AFC 0%, #C347FC 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #C347FC 0%, #1FE886 100%)",
        "gradient-hero":
          "linear-gradient(135deg, rgba(209, 81, 255, 0.9) 0%, rgba(11, 200, 229, 0.9) 100%)",
        "gradient-section":
          "linear-gradient(180deg, rgba(209, 81, 255, 0.05) 0%, rgba(11, 200, 229, 0.05) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
