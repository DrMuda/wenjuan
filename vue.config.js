module.exports = {
    publicPath: './',
    devServer: {
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://47.105.165.41:31377',
                changeOrigin: true,
                ws: true
            }
        },
    }
}