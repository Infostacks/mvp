module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "home-shop":
      //     "url('https://candlefish-assets.s3.amazonaws.com/assets/shop-home.jpg')",
      //   "home-sdiscover":
      //     "url('https://candlefish-assets.s3.amazonaws.com/assets/discover-home.jpg')",
      //   "home-browselibrary":
      //     "url('https://candlefish-assets.s3.amazonaws.com/assets/library-home.jpg')",
      // },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wider: ".05em",
      widest: ".25em",
    },
  },
  plugins: [],
};
