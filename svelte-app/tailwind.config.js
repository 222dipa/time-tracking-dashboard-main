module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    extend: {},
    colors: {
      //------------------------------- PRIMARY -------------------------------
      'blue': '#5847eb',
      // (work)
      'lightredwork': '#ff8c66',
      // (play)
      'softblue': '#56c2e6',
      // (study)
      'lightredstudy': '#ff5c7c',
      // (exercise)
      'limegreen': '#4acf81',
      // (social)
      'violet': '#7536d3',
      // (self care)
      'softorange': '#f1c65b',
      //-------------------------------  NEUTRAL -------------------------------
      'verydarkblue': '#0f1424',
      'darkblue': '#1c1f4a',
      'desaturatedblue': '#6f76c8',
      'paleblue': '#bdc1ff',
      'white': '#ffffff',
    },
    screens: {
      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
}
