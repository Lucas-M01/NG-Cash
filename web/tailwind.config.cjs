/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './index.html',
    ],
    theme: { 

        fontSize: {
          xs: 14,
          sm: 16,
          md: 18,
          lg: 20,
          xl: 24,
          '2xl': 32,
        },
        colors: { 
          transparent: 'transparent',
          
          gray: {
            900: '#121214',
            800: '#202024',
            400: '#7C7C8A',
            600: '#323238',
            100: '#E1E1E6',
            200: '#C4C4CC',
          },
          cyan: {
            500: '#81D8F7',
            300: '#98e1f8',
          },
          green: {
            600: '#015F43',
            500: '#00875F',
            700: '#015F43',
          },
          red: {
            500:'#AB222E',
            400: '#F75A68',
          },
          yellow: '#cc8400',
          black: '#000000'
        },
        extend: {
          fontFamily: {
            sans: 'Inter, sans-serif'
          }
        },
    },
    plugins: [],
  }
  