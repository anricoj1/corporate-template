/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@acme/tailwind-config/tailwind.config");
module.exports = {
  ...sharedConfig,
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
};
