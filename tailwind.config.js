/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-custom-cyan": "#3aafa9",
      "custom-black": "#17252a",
      "custom-dark-cyan": "#2b7a78",
      "custom-off-white": "#def2f1",
      "custom-white": "#feffff",
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};