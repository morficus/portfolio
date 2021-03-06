module.exports = {
    title: 'Maurice Williams - Portfolio',
    description: 'A place to showcase the things I\'ve done',
    themeConfig: {
        nav: [
            { text: 'My Work', link: '/portfolio/' },
            { text: 'My Career', link: '/resume/' },
            { text: 'Hire me', link: 'https://www.upwork.com/fl/mauricew24'},
            { text: 'Get in touch', items: [
                    { text: 'Twitter', link: 'https://www.twitter.com/morficus' },
                    { text: 'GitHub', link: 'https://www.github.com/morficus' },
                    { text: 'LinkedIn', link: 'https://www.linkedin.com/in/mauricew/' },
                    { text: 'StackOverflow', link: 'https://stackoverflow.com/users/1021300/maurice'},
                    { text: 'Sourcerer', link: 'https://sourcerer.io/morficus'},
                    { text: 'Email', link: '/contact' }
                ] },
        ],
        sidebar: [
            '/',
            ['portfolio/', 'My Work'],
            ['resume/', 'My Career'],
            // ['https://www.upwork.com/fl/mauricew24', 'Hire me']
        ],
        lastUpdated: true,
    },

    base: '/',
    head: [
        ['meta', {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}]
    ],
    dest: 'docs',
    serviceWorker: true,
    ga: 'UA-74377776-1'
}
