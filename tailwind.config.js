/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: "'Work Sans', sans-serif",
        primary: '"Croffle", sans-serif',
      },
      screens: {
        xs: '475px',
        // => @media (min-width: 475px)
        sm: '640px',
        // => @media (min-width: 640px)

        md: '768px',
        // => @media (min-width: 768px)

        lg: '1024px',
        // => @media (min-width: 1024px)

        xl: '1280px',
        // => @media (min-width: 1280px)

        '2xl': '1373px',
        // => @media (min-width: 1536px)
      },
      colors: {
        primary: '#F57D8D',
        secondary: '#DBE0DD',
        background: '#2F314B',
        card: '#363756',
        SlideImage: '#3D4175',
        SlideImagebg: '#6E6FBA',
        roadMapCard: '#252841',
      },
      container: {
        padding: {
          DEFAULT: '0',
        },
        margin: {
          DEFAULT: '0',
        },
      },
      backgroundImage: {
        navbar: "url('/static/images/navBackground.svg')",
        drawer: "url('/static/images/mobiledrawer.svg')",
        showcase: "url('/static/images/bg123c.png')",
        showcase2: "url('/static/images/showcase.png')",
      },

      animation: {
        'spinner-grow': 'spinner-grow 1s linear infinite', // Define the spinner-grow animation
      },
      keyframes: {
        'spinner-grow': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
    ],
    corePlugins: {
      animation: false, // Disable Tailwind CSS's default animation classes
    },
  },
};
