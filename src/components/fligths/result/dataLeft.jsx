import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getTimeDetailVol, getAeroport } from '../../../shared/utility'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';

const DataLeft = ({ vol }) => {
    return (
        <Fragment>
            <div className="detail__flights">
                <h6>{getTimeDetailVol(vol)}</h6>
                <p><FlightTakeoffIcon />  {getAeroport(vol.departure_airport).name} </p>
                <p><FlightLandIcon />   {getAeroport(vol.arrival_airport).name}</p>
            </div>
        </Fragment>
    );
};

DataLeft.propTypes = {
    vol: PropTypes.object.isRequired
};

export default DataLeft;