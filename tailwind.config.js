module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'red-frag': '#e90e0e',
      },
      fontFamily: {
        'proxima': ['ProximaNova-Regular', 'Segoe UI', 'Proxima Nova', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [
    function({ addBase, config }) {
      addBase({
        'body': {
          backgroundColor: config('theme.colors.slate.950'),
        },
      })
    },
  ],
}