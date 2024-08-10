/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      borderColor:{

        'MiColor' :[
           'bg-gradient-to-r from-cyan-500 to-blue-500',
      ],
      },
    
      dropShadow:{
        "Mi-config": [
            '0 4px 3px rgb(227, 180, 194)',
            '0 2px 2px rgb(227, 180, 194)',
                ],
              },
      fontFamily:{
        'font-grey': ['Grey Qo', ],
        'f22-grey':['Great Vibes',],
            }

    },
  },
  plugins: [],
}

// bg-gradient-to-r from-cyan-500 to-blue-500


// (0 4px 3px rgb(227 180 194)) drop-shadow(0 2px 2px rgb(227 180 194));