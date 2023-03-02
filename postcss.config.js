const path = require('path');

module.exports = {
  content: [path.join(__dirname, './**/*.{tsx, ts, html}')],
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }