// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        'nuxt-seo-kit'
    ],
    modules: [
        '@nuxt/content',
        '@nuxt/image-edge',
        ['@nuxtjs/google-fonts', {
            families: {
                'Quicksand': [300],
            },
            download: true,
            inject: true
        }]
        // ,
        // ['nuxt-cloudflare-analytics', {
        //     token: '2748a102b71040d1b4888bfe652bc5ab', // Example 1a2b3v4a5er6ac7r8afd
        // }]
    ],
    css: [
        'vuetify/lib/styles/main.sass',
        '@fortawesome/fontawesome-free/css/all.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://kkiermasz.com',
            siteName: 'Jakub Kiermasz',
            siteDescription: 'Jakub Kiermasz\'s personal website',
            titleSeparator: '|',
            trailingSlash: true,
        }
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in', appear: true}
    },
    image: {
        provider: 'ipx',
        staticFilename: '[publicPath]/images/[name]-[hash][ext]'
    }
})
