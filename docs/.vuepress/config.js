const path = require("path")

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, "../assets")
            }
        }
    },
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'External', link: 'https://www.yaoin.net' },
        ],
        sidebar: [
            '/wechat/',
            '/macos/'
        ]
    }
}