/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, 
      fontFamily: {
        primary: 'Orbitron',
        secondary: 'Rajdhani',
        tertiary: 'Aldrich'
      },
      container:{
        padding: {
          DEFAULT: '15px',
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        xxl: '1300px',
        xxxl: '1500px'
      },
      colors:{
        primary: '#0a0a0a',
        accent: '#B809C3',
        white: '#FFFFFF',
        black: '#0F0E0E',
        green: '#004225'
      }
      
    },
  },
  plugins: [],
}
