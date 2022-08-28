/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Tomorrow': ['Tomorrow', 'sans-serif'],
      },
      textColor:{
        'label':'#737BAE',
        'info': '#ECF0FF',
        'success': '#00FFA3',
        'loss':'#FF4D4D'
      },
      boxShadow: {
        'round-tr': '15px -25px 0px 15px #14172B',
        'round-tl': '-15px -25px 0px 15px #14172B',
        'round-bb': '0px 25px 0px 15px #14172B'
      },
      backgroundImage:{
        'backgrad': 'linear-gradient(to bottom, rgba(98, 106, 136, 10)-500% , rgb(20, 23, 43,1)127.43%);'
      },
      backdropBlur:{
        'backblur': '100px'
      }
    },
    colors:{
      background:'#14172B',
      yellow:'#eab308',
      blue: '#06b6d4',
      bordertop:'rgb(20, 23, 43,1)',
      bityellow: 'rgb(234 179 0 / 30%)',
      bitdark:'rgb(20 23 43 / 76%)60%',
      solpurple:'rgb(220 31 255 / 30%)',
      ethwhite: 'rgb(237 240 244 / 30%)',
      shibred:'rgb(228 45 4 / 30%)',
      borderbottom:'rgba(98, 106, 136, 10)',
      inborder:'rgb(236, 240, 255,0.1)'
    }
  },
  plugins: [],
}
