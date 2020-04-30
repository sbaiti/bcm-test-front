import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    getFlightsRequest: ['response'],
    getFlightsSuccess: ['response'],
    getFlightsFailure: ['error'],
})

export const getFlightsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    response: null,
    error: null,
    loading: null,
})

/* ------------- Reducers ------------- */

const getFlightsRequest = state =>
    state.merge({ response: null, loading: true })

const getFlightsSuccess = (state, { response }) =>
    state.merge({
        error: false,
        response,
        loading: false,
    })

const getFlightsFailure = (state, { error }) => {
    const { response } = error
    return state.merge({
        error: true,
        response,
        loading: false,
    })
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_FLIGHTS_REQUEST]: getFlightsRequest,
    [Types.GET_FLIGHTS_SUCCESS]: getFlightsSuccess,
    [Types.GET_FLIGHTS_FAILURE]: getFlightsFailure,
})
