/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        textGreen: "#077915",
        bgGrey : "#f5f5f5",
        textGrey: "#666",
        bgCheckout: "#fc7710",
        bgModal :"rgba(0, 0, 0, 0.66)",
        bgFooter:"#ddd",
      },
      boxShadow: {
        shadowBottom: "0 1px 2px 0 rgba(0,0,0,.05)",
        borderForm: "0 8px 16px #0000001a",
        shadowProduct: "0 3px 6px rgba(40, 39, 39, 0.16)",
        shadowCart: "0 3px 6px rgba(40, 39, 39, 0.5)",
      },
    },
  },
  plugins: [],
  
}

