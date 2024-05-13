/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark': 'rgb(29 35 42)'
      },

      backgroundImage: {'fundo': "url('./src/assets/bottom-welcome.jpg')", 
                        'banner': "url('./src/assets/banner.jpg')"
       },
    } ,
    
    
    
  },
  plugins: [
    require('daisyui')
  ],

  daisyui: {
    themes: ["light", "dark",],
  }
}

