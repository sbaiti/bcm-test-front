import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { getAeroport } from '../../../shared/utility'

const Detail = ({ title, params }) => {
    switch (title) {
        case 'Type de voyage':
            return (
                <div className="detail__flights">
                    <h4>{title}</h4>
                    <h6>{params.tripType === 'OW' ?
                        <Fragment> <CardTravelIcon /> Aller simple</Fragment> :
                        <Fragment><CardTravelIcon /> Aller Retour</Fragment>}</h6>
                </div>
            )
        case 'Date':
            return (
                <div className="detail__flights">
                    <h4>{title}</h4>
                    <h6><CalendarTodayIcon /> Date de départ: {params.departure_date}</h6>
                    {params.tripType === 'R' &&
                        <h6><CalendarTodayIcon /> Date de Retour: {params.return_date}</h6>
                    }
                </div>
            )
        case 'Aéroport':
            return (
                <div className="detail__flights">
                    <h4>{title}</h4>
                    <h6><FlightTakeoffIcon /> Départ : {getAeroport(params.departure_airport).name} </h6>
                    <h6><FlightLandIcon /> Arrivée :  {getAeroport(params.arrival_airport).name}</h6>
                    {params.tripType === 'R' &&
                        <h6><AirplanemodeActiveIcon /> Retour :  {getAeroport(params.departure_airport).name}</h6>

                    }
                </div>
            )
        default:
            return null
    }
};

Detail.propTypes = {
    title: PropTypes.string.isRequired
};

export default Detail;