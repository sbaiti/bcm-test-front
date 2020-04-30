import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import DataLeft from './dataLeft';
import DataRight from './dataRight'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%'
    }
}));


const Vol = ({ vol }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                {!Object.keys(vol).includes('outbound') ?
                    (
                        <Grid container style={{ padding: "5px" }} justify="center" alignItems="flex-start">
                            <Grid item md={6} sm={12} >
                                <DataLeft vol={vol} />
                            </Grid>
                            <Grid container md={6} sm={12} justify="center" alignItems="center">
                                <DataRight vol={vol} />
                            </Grid>
                        </Grid>
                    ) :
                    (
                        <Grid container style={{ padding: "5px" }} justify="center" alignItems="flex-start">
                            <Grid item md={6} sm={12} >
                                <DataLeft vol={vol.outbound} />
                            </Grid>
                            <Grid container md={6} sm={12} justify="center" alignItems="center">
                                <DataRight vol={vol.outbound} />
                            </Grid>
                            <Grid item md={6} sm={12} >
                                <DataLeft vol={vol.inbound} />
                            </Grid>
                            <Grid container md={6} sm={12} justify="center" alignItems="center">
                                <DataRight vol={vol.inbound} />
                            </Grid>
                        </Grid>
                    )
                }
            </Paper>
        </div>
    );
};

Vol.propTypes = {
    vol: PropTypes.object.isRequired
};

export default Vol;