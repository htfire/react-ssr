import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from "react-helmet"

export const render = (req, routes, store, context) => {

    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {renderRoutes(routes)}
                </div>
            </StaticRouter>
        </Provider>
    ))

    console.log(context)
    const css = context.css.length ? context.css.join('\n') : ''
    const helmet = Helmet.renderStatic();
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Document</title>
    <style>${css}</style>
</head>
<body>
    <div id="root">${content}</div>
    <script>
        window.context = {
            state: ${JSON.stringify(store.getState())}
        }
    </script>
    <script src="/index.js"></script>
</body>
</html>`
}