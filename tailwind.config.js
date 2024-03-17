/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "rgb(235, 253, 242)",
        "btn-outline": "rgb(0, 121, 69)",
        "transparent-green": "rgba(0, 121, 69, 0.1)",
        "btn-gradient":
          "linear-gradient(146.65deg, rgb(0, 121, 69) 0.87%, rgb(35, 204, 131) 98.73%)",
      },
      boxShadow: {
        silver: "0px 2px 5px rgba(204, 204, 204, 0.2)",
      },
    },
  },
  plugins: [],
};

