module.exports = {
    lintOnSave: false, // 关闭 eslint 检测，可设置 true 开启
    devServer: {
        port: 8888,
        proxy: {
            '/hy': {
                target: 'http://192.168.0.1:8080/investorhub',
                pathRewrite: {
                    '^/hy': '' // 重写path
                },
                changeOrigin: true
            }
        }
    }
}
