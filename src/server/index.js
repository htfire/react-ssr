import 'babel-polyfill'
import Koa from 'koa'
import staticFunc from 'koa-static'
import path from 'path'
import proxy from 'http-proxy-middleware'
import { matchRoutes } from 'react-router-config'

import { getStore } from '../store'
import routes from '../router'
import { render } from './render'

const app = new Koa()

app.use(async (ctx, next) => {
    if (ctx.url.startsWith('/api')) {
        let baseApi = 'https://www.easy-mock.com'
        ctx.respond = false
        return proxy({
            target: baseApi, // 服务器地址
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api': '/mock/5c1864329172fa10e61b63ff'
            }
        })(ctx.req, ctx.res, next)
    }
    return next()
})

app.use(staticFunc(
    path.join(__dirname, '../public')
))

app.use(async (ctx) => {
    let req = ctx.request
    const promises = []
    const store = getStore(req)
    const matchedRoutes = matchRoutes(routes, req.path)
    const context = { css: [] }

    matchedRoutes.forEach(item => {
        item.route.loadData && promises.push(item.route.loadData(store));
        // if (item.route.loadData) {
        //     const promise = new Promise((resolve, reject) => {
        //         item.route.loadData(store).then(resolve).catch(reject)
        //     })
        //     promises.push(promise)
        // }
    })
    try {
        await Promise.all(promises)
    } catch (err) {
        console.log(err)
    }
    const html = render(req, routes, store, context)

    if (context.action === 'REPLACE') {
        ctx.status = 301
        ctx.redirect(context.url)
    }

    if (context.NOT_FOUND) {
        ctx.status = 404
    }
    ctx.body = html

})

app.listen(3003, () => {
    console.log('[react-server] starting at port 3003')
})