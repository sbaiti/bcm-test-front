import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux'
import GroupByPrice from './groupByPrice';
import SpinnerDot from '../../ui/spinner/spinnerDot'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            width: '100%'
        }
    },
}));

const Resultat = ({ data }) => {
    const [prices, setPrices] = useState(null);

    useEffect(() => {
        if (data && data.data.length > 0)
            setPrices(data.data)
        else
            setPrices(null)
    }, [data])
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Grid container>
                    {prices ?
                        <GroupByPrice prices={prices} />
                        :
                        <SpinnerDot />
                    }
                </Grid>
            </Paper>
        </div>
    );
};

Resultat.propTypes = {
    data: PropTypes.object
};

Resultat.defaultProps = {
    data: {}
}

const mapStateToProps = ({ flights }) => {
    return {
        data: flights.searchFlights.response
    }
}

export default connect(mapStateToProps, {})(Resultat);