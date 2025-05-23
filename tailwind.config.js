/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7ddff',
          300: '#9fc1ff',
          400: '#719cff',
          500: '#4d75fa',
          600: '#3454f0',
          700: '#2c42dd',
          800: '#2838c6',
          900: '#2734a0',
          950: '#1b2055',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef5',
          200: '#d3dbe8',
          300: '#adbcd4',
          400: '#8196bc',
          500: '#6279a6',
          600: '#4c608a',
          700: '#3e4d70',
          800: '#35425f',
          900: '#303a52',
          950: '#1c2235',
        },
        accent: {
          50: '#fef3ee',
          100: '#fde5d9',
          200: '#fbc7b2',
          300: '#f8a183',
          400: '#f5704d',
          500: '#f34c1f',
          600: '#e63610',
          700: '#be290f',
          800: '#972413',
          900: '#7a2114',
          950: '#420e09',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};