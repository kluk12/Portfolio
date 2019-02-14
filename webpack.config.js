const path = require("path");

module.exports = {
  module: {
    zasady: [
      {
        test: / \. scss $ /,
        use: [
          " style-loader ", // tworzy węzły stylów z ciągów JS
          " css-loader ", // tłumaczy CSS na
          " Sass-loader " //CommonJS " kompiluje Sass do CSS, domyślnie używając Node Sass
        ]
      }
    ]
  },
  test: /\.(scss)$/,
  use: [
    {
      loader: "style-loader" // inject CSS to page
    },
    {
      loader: "css-loader" // translates CSS into CommonJS modules
    },
    {
      loader: "postcss-loader", // Run postcss actions
      options: {
        plugins: function() {
          // postcss plugins, can be exported to postcss.config.js
          return [require("autoprefixer")];
        }
      }
    },
    {
      loader: "sass-loader" // compiles Sass to CSS
    }
  ]
};
