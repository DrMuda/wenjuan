module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://192.168.20.33:8085',
                changeOrigin: true,
                ws: true
            }
        }
    }
}