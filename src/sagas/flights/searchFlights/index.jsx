import { takeLatest, put } from 'redux-saga/effects';
import getFlightsActions, {
    getFlightsTypes,
} from '../../../redux/flights/searchFlights/index'
import { Get } from '../../../serveur/axios'

function* getFlightsSagas({ response }) {
    const {
        departure_airport, arrival_airport, departure_date, return_date, tripType
    } = response;
    try {
        const res = yield Get(`api/flights?departure_airport=${departure_airport}&arrival_airport=${arrival_airport}&departure_date=${departure_date}&return_date=${return_date}&tripType=${tripType}`)
        if (res.status === 200) {
            yield put(getFlightsActions.getFlightsSuccess(res.data))
        } else {
            yield put(getFlightsActions.getFlightsFailure(res.data))
        }
    } catch (error) {
        yield put(getFlightsActions.getFlightsFailure(error))
    }
}

export function* getFlightsSaga() {
    yield takeLatest(getFlightsTypes.GET_FLIGHTS_REQUEST, getFlightsSagas)
}