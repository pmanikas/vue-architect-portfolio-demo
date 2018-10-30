const appConfig = require('./app.config')

module.exports = {
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    module: {
      rules: [
        // ... other rules omitted
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            {
              loader: 'style-loader!css-loader!sass-loader',
              options: {
                // enable CSS Modules
                modules: true,
                // customize generated class names
                localIdentName: '[local]_[hash:base64:8]'
              }
            }
          ]
        }
      ]
    }
  },
}
