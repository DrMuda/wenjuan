module.exports = {
    publicPath: '/wenjuan/',
    devServer: {
        disableHostCheck: true,
        proxy: {
            '^/api': {
                // 外网ip
                // target: 'http://120.27.3.70:31800',

                // 内网ip
                target: "http://192.168.20.26:8085",
                changeOrigin: true,
                ws: true
            },
        },
    }
}