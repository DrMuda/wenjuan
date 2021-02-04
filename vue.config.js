module.exports = {
    publicPath: '/wenjuan/',
    devServer: {
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://120.27.3.70:31800',
                changeOrigin: true,
                ws: true
            }
        },
    }
}