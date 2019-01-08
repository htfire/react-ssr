import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from '../router'
import { getClientStore } from '../store'


const store = getClientStore()
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    {renderRoutes(routes)}
                </div>

            </BrowserRouter>
        </Provider>

    )
}
ReactDom.hydrate(<App />, document.getElementById('root'))