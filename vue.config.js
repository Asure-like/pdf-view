module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: {
    externals: {
      'pdfjs-dist': 'pdfjsLib'
    }
  }
}
