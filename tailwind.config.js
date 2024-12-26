export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'button-shadow': 'rgba(0, 0, 0, 0.15) 0px 1px 5px'
      },
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
    },
  },
  plugins: [],
};


