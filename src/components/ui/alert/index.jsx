import React, { Fragment } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import PropTypes from 'prop-types'

const SweetAlertCmp = ({ show, message, toggleShow }) => {
    return (
        <Fragment>
            <SweetAlert
                show={show}
                title='Erreur'
                error
                onConfirm={() => toggleShow()}
            >
                {message}
            </SweetAlert>
        </Fragment>
    );
}

SweetAlertCmp.protypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    toggleShow: PropTypes.func.isRequired
}

export default SweetAlertCmp;