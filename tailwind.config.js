module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: 'white',
        black: 'black',
        gray: 'hsla(255, 0.1%, 70%)', // 0.1% is because tailwind converts 0% => 0 which causes an issue
        'desaturated-dark-cyan': 'hsla(180, 29%, 50%)',
        bg: 'hsla(180, 52%, 96%)',
        'filter-tablets': 'hsla(180, 31%, 95%)',
        'dark-cyan': 'hsla(180, 8%, 52%)',
        'dark-grayish-cyan': 'hsla(180, 14%, 20%)',
      },
      spacing: {
        xs: '.25rem',
        sm: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '10rem',
        pg: '8.5%',
        'pg-sm': '5%',
        btn: {
          sm: '6.25rem',
          lg: '9.5rem',
          'p-sm': '.25rem 1rem',
          'p-lg': '.5rem 1.5rem',
        },
        header: {
          lg: '12rem',
          sm: '9.25rem',
        },
      },
      maxWidth: {
        job: '85rem',
      },
      borderRadius: {
        sm: '.4rem',
        md: '.6rem',
        lg: '1.5rem',
      },
      screens: {
        xl: { max: '1100px' },
        lg: { max: '900px' },
        mob: { max: '700px' },
        sm: { max: '500px' },
      },
      transitionDuration: {
        sm: '.25s',
        md: '.4s',
      },
      fontFamily: { default: `'Spartan' ,sans-serif` },
      fontSize: {
        default: '15px',
        h1: '1.5rem',
        h2: '1.05rem',
        h3: '1.075rem',
        h4: 'inherit',
        h5: 'inherit',
        h6: 'inherit',
        p: '.8rem',
        li: '1rem',
        a: '1rem',
      },
    },
  },
  plugins: [],
};
