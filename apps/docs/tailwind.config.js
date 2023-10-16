/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./stories/**/*.tsx", "./stories/**/*.stories.@(js|jsx|ts|tsx)"],
    presets: [require("@acme/tailwind-config/tailwind.config")],
  };
  