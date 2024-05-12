/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2lg': '1200px',
        'xl' :'1440px',
      },
    },
  },
  plugins: [],
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      // CSS and JavaScript loaders...
    ],
  },
}
