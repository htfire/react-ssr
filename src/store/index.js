import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'
import { clientAjax, serverAjax } from '../axios'

const reducer = combineReducers({
    home: homeReducer
})


export const getStore = (req) => {
    return createStore(
        reducer,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument(serverAjax(req)))))
}

export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(
        reducer,
        defaultState,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument(clientAjax()))))
}