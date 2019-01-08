import { CHANG_LIST } from './constants'
const defaulState = {
    name: '1234',
    newsList: []
}

export default (state = defaulState, action) => {
    switch (action.type) {
        case CHANG_LIST:
            return {
                ...state,
                newsList: action.list
            }
        default:
            return state
    }
}