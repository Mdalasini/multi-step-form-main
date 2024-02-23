module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'sm': {'max': '429px'},
      // => @media (max-width: 429px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'xl': {'max': '1439px'},
      // => @media (max-width: 1439px) { ... }
    },
    extend: {
      colors: {
        marineBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        pastelBlue: 'hsl(228, 100%, 84%)',
        lightBlue: 'hsl(206, 94%, 87%)',
        strawberryRed: 'hsl(354, 84%, 57%)',
  
        coolGray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'sans': ['Ubuntu', 'sans-serif'],
      },
      fontWeight: {
        'light': 400,
        'normal': 500,
        'bold': 700,
      },
    },
  },
  plugins: [],
}
