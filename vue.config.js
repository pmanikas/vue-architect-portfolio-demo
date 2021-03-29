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
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/vue-architect-portfolio-demo/'
      : '/',
  lintOnSave: true,
}
