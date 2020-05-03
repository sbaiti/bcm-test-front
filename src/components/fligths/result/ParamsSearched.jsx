import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Detail from './detail';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        background: 'red'
    },
}));

const ParamsSearched = ({ params }) => {
    const classes = useStyles();
    const [par, setPar] = useState(params);

    /* life cycle */
    useEffect(() => {
        if (params && params.params)
            setPar(params.params)
        else
            setPar(null)
    },
        [params])
    return (
        par ? (
            <div className={classes.root}>
                <Paper elevation={3} style={{ background: '#ededed' }}>
                    <Grid container>
                        <Grid item lg={4} xs={12} md={6}>
                            <Detail params={par} title="Type de voyage" />
                        </Grid>
                        <Grid item lg={4} xs={12} md={6}>
                            <Detail params={par} title="Aéroport" />
                        </Grid>
                        <Grid item lg={4} xs={12} >
                            <Detail params={par} title="Date" />
                        </Grid>
                    </Grid>
                </Paper>
            </div >
        )
            :
            null
    )
}
ParamsSearched.propTypes = {
    params: PropTypes.object
}
ParamsSearched.defaultProps = {
    params: {}
}
const mapStateToProps = ({ flights }) => {
    return (
        {
            params: flights.searchFlights.response
        })
}

export default connect(mapStateToProps, {})(ParamsSearched);