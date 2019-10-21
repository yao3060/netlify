const path = require("path")

const nav = [
    { text: 'Home', link: '/' },
    { text: 'Laravel', link: '/laravel/' },
    { text: 'External', link: 'https://www.yaoin.net' },
]

const sidebar = [
    {
        title: 'wechat',
        path: '/wechat/'
    },
    {
        title: 'macos',
        path: '/macos/'
    },
    {
        title: 'nginx-modsecurity-waf',   // 必要的
        path: '/nginx-modsecurity-waf/'
    },
    {
        title: 'Laravel',
        path: '/laravel/',
        children: [
            '/laravel/facades'
        ]
    }
]

// const sidebar = {
//     '/laravel/': [
//         '',
//         'facades'
//     ],

//     '/': [
//         '',
//         '/nginx-modsecurity-waf/',
//         '/macos/',
//         '/wechat/'
//     ]
// }

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav,
        sidebar
    },

}