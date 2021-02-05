module.exports = {
    publicPath: '/wenjuan/',
    devServer: {
        disableHostCheck: true,
        proxy: {
            '^/api/studentDatum': {
                target: 'http://120.27.3.70:31800',
                changeOrigin: true,
                ws: true
            },
            '^/api/imageVerify': {
                target: "http://192.168.20.26:8085",
                changeOrigin: true,
                ws: true
            }
        },
    }
}