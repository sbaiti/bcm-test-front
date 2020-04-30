import React from 'react';
import PropTypes from 'prop-types';
import Vol from './vol';

const Vols = ({ vols }) => {
    return vols.map((vol, index) => { return <Vol key={index} vol={vol} /> }
    )
};

Vols.propTypes = {
    vols: PropTypes.array.isRequired
};

export default Vols;