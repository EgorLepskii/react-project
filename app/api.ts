export const API = {
    posts: {
        all: process.env.NEXT_PUBLIC_DOMAIN + '/posts'
    },
    topPage: {
        find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias',
    }
};