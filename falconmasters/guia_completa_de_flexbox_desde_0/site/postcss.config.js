//post.config.js No se usa!!!, no lo coge automaticamente
if(process.env.NODE_ENV === 'production') {
    module.exports = {
      plugins: [
        require('autoprefixer'),
        require('cssnano'),
        // More postCSS modules here if needed
      ]
    }
  }
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    // More postCSS modules here if needed
  ]
}  