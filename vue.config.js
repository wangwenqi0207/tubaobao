const path = require('path')

module.exports = {
    lintOnSave: false,
    publicPath: './',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
            .set('@styles', path.join(__dirname, 'src/styles'))
            .set('@views', path.join(__dirname, 'src/views'))
            .set('@components', path.join(__dirname, 'src/components'))
    },
}
