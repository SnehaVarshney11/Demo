/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }

          'small': '375px',
          'large': '676px',
          'big':'792px',
        },


        colors: {
          primary_light: "#E5397B", //PINK
          primary_dark: "#be185d", // Dark PINK
          color_color_black: "#121212",
          color_color_white: "#ffffff",
          color_grey: "#6b7280",
          color_grey_100: "#f3f4f6",
          color_grey_700: "#374151",
          border: "#EAEAEA",
          text: "#585858",
      },
      
      spacing: {
        // WIDTH
        '7': '62px',
        '8': '60rem',
        '9': '328px',
        '11': '360px',

        //HEIGHT
        '30': '30rem',
        '728': '728px',
        '1080': '1080px',

        //PADDING
        '800':'50rem',
        '448': '28rem',
        '960': '60rem',
      }
    },

  plugins: [],
}

}