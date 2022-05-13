module.exports = {
    devServer: {
        proxy: {
            '/test': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'http://47.97.25.111:8088/',  // target为需要访问的地址
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/test': ''
                }
            }
        }
    }
}