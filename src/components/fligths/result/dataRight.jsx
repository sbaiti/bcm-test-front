import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core"
import LocalMallIcon from '@material-ui/icons/LocalMall';
import styled from 'styled-components';
import { getDurationVol } from '../../../shared/utility';
import { greenTeal } from '../../../assets/sass/base/_variables.scss'

const TextMiddle = styled.div`
padding-top: ${props => props.margin};
text-align:center
`
const DataRight = ({ vol }) => {
    return (
        <Fragment>
            <Grid item sm={12} md={6} style={{ borderRight: "3px solid" }} >
                <TextMiddle >
                    <LocalMallIcon fontSize="small" />   Bagage à main inclus
                    </TextMiddle>
            </Grid>
            <Grid item sm={12} md={6}>
                <TextMiddle margin="1em">
                    <Fragment>{getDurationVol(vol)}</Fragment>
                    <p style={{ color: greenTeal }} >
                        sans escale
                    </p>
                </TextMiddle>
            </Grid>
        </Fragment>
    );
};

DataRight.propTypes = {
    vol: PropTypes.object.isRequired
};

export default DataRight;