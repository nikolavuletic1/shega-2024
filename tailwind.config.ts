
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1420px',
      },
      swiperSize: {
        'custom-swiper': 'width: 450px!important; height: 450px!important',
      },

      animation: {
        'fade-in-left': 'fade-in-left 1s ease-in-out',
        'fade-in-left-d': 'fade-in-left 1.5s ease-in-out',
        'fade-in-right': 'fade-in-right 1s ease-in-out',
        'zoom-in-from-zero': 'zoom-in-from-zero 1.2s ease-in-out',
        // 'pulse': 'pulse 2s infinite', // Add the pulse animation

        'rotate-3': 'spin 1s ease-in-out',
        // 'pulse-border-out': 'pulse-border-out 0.3s ease-out forwards',
        'pulse-border': 'pulse-border 1.5s infinite',
        'pulse-border-out': 'pulse-border-out 1s ease-out forwards',
        'blue': 'blue 1.5s infinite',

      },

      keyframes: {
        'rotate-3': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1080deg)' },
        },
        'fade-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-40%) translateY(0%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0) translateY(0)',
          },
        },
    
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX(50%) translateY(0%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0) translateY(0)',
          },
        },
        'zoom-in-from-zero': {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },


        'pulse-border': {
          '0%, 100%': {
            transform: 'scale(.75)',
            boxShadow: '0 0 0 0 rgba(255,215,1)',
            borderColor: 'gold',
          },
          '50%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 20px rgba(255,215,0,0.5)',
            borderColor: 'gold',
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0px rgba(255,215,0,1)',
            borderColor: 'gold',
          },
        },


        'blue': {
          '0%, 100%': {
            transform: 'scale(.75)',
            boxShadow: ' 0 0 0 0 rgb(0, 110, 255)',
            borderColor: 'green',
          },
          '50%': {
            transform: 'scale(1.1)',
            boxShadow: ' 0 0 0 20px rgba(4, 0, 255, 0.5)',
            borderColor: 'green',
          },
          '100%': {
            transform: 'scale(1.1)',
            boxShadow: '0 0 0 0px rgba(98, 0, 255, 0.3)',
            borderColor: 'green',
          },


        },
      },



      colors: {
        red: {
          10: '#ed1c24',
          20: '#E00000',
          40: '#C40001',
          50: '#8b0304'
        },
        green: {
          10: '#527000',
          50: '#30AF5B',
          40: '#B2D234',
          60: '#4a802d',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
          40: '#899EA6',
        },
        orange: {
          50: '#FF814C',
          60: '#FF8800',
          70: '#da511f',
          80: '#af4316',

        },
        blue: {
          10: '#40E0D0',
          20: '#33C9FF',
          40: '#00679E',
          50: '#00527e',
          30: '#00AEEF',
          70: '#002B33',

        },
        pink: {
          10: '#790C25',
          20: '#EC008C',
          40: '#8C0052',
          60: 'rgb(236,0,140)',
        },
        yellow: {
          10: '#F9EC2A',
          20: '#FFFF00',
          50: '#FEC601',
          // 10: '#FFF5E1',
        },
      },
      fontFamily: {
        // customFont: ['Baloo 2', 'sans-serif'],
        // customFont: ['Freckle Face'],
        customFont: ['Patrick Hand SC']
      },
      backgroundImage: {
        'yellow-bg-g': 'linear-gradient(90deg, #FFFF00, #FFF200, #FFDE00, #FFD100, #FFC300, #FFB600, #FFA800)',
        'bg-img-2': "url('/img-2.png')",
        'bg-img-3': 'linear-gradient(270deg, hsla(60, 100%, 50%, 1) 0%, hsla(53, 100%, 50%, 1) 100%)',
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'gradient-radial-green': 'radial-gradient(circle, #B2D234, #5CA038)',
        // 'gradient-radial-red': 'radial-gradient(circle, #ef333a, #C40001)',
        'gradient-radial-red': 'radial-gradient(circle, #ff4646, #e00000)',
        // 'gradient-radial-red': 'radial-gradient(circle, #ef333a, #E00000 )',


        'gradient-radial-pink': 'radial-gradient(circle, #EC008C, #8C0052)',
        'gradient-radial-blue': 'radial-gradient(circle, #3FA7CE, #00679E)',
        // 'gradient-radial-orange': 'radial-gradient(circle, #f7941e, #da511f)',
        'gradient-radial-orange': 'radial-gradient(circle, #f4a54d, #ff8905)',
      },
      background: {
        pink: 'rgb(236,0,140)',
        'pink-moz': '-moz-radial-gradient(circle, rgba(236,0,140,1) 20%, rgba(140,0,82,1) 60%)',
        'pink-webkit': '-webkit-radial-gradient(circle, rgba(236,0,140,1) 20%, rgba(140,0,82,1) 60%)',
        'pink-radial': 'radial-gradient(circle, rgba(236,0,140,1) 20%, rgba(140,0,82,1) 60%)',
        'pink-filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ec008c", endColorstr="#8c0052", GradientType=1)',
      },
    },
  },
  plugins: [],

};

