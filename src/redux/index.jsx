import { combineReducers } from 'redux'
import flights from './flights'

const containersReducer = {
    flights
}

const appReducer = combineReducers({
    ...containersReducer
})

export const createGlobalReducer = (state, action) => appReducer(state, action)

export default createGlobalReducer
