import data from '../assets/data/airports.json';
import moment from 'moment'

export function generateKey() {
    const uuid = require('uuid/v1')
    const id = uuid()
    return id
}

export function verifDataBeforRequest(payload) {
    const errStr = "est requis";
    if (payload.tripType === '')
        return [true, `TripType ${errStr}`]
    if (payload.departure_airport === '')
        return [true, `departure_airport ${errStr}`]
    if (payload.arrival_airport === '')
        return [true, `arrival_airport ${errStr}`]
    if (payload.return_date && payload.tripType !== '' &&
        new Date(payload.departure_date) > new Date(payload.return_date))
        return [true, "Le date de retour n'est peut étre après la date de departure"]
    else
        return [false];
}

export function getAeroport(aeroportS) {
    return (data.data).filter(aeroport => aeroport.iata === aeroportS)[0]
}

export function getTimeDetailVol(vol) {
    return `${vol.departure_time.substring(11)} - ${vol.arrival_time.substring(11)}`
}

export function getDurationVol(vol) {
    const now = vol.departure_time;
    const then = vol.arrival_time;
    const duration = moment.utc(moment(then, "YYYY-MM-DDTHH:mm").diff(moment(now, "YYYY-MM-DDTHH:mm"))).format("HH:mm")
    return (duration.replace(':', 'h ') + ' min')
}