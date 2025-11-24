/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,jsx,tsx,mdx}",
    "./packages/design-kit/**/*.{js,ts,jsx,tsx,css}",
  ],

  darkMode: "class",

  // All theme values are now defined in @theme directive in theme.css
  // This config only handles content paths and darkMode
  // The @theme directive in CSS takes precedence over theme config
};
