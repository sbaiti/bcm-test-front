import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import DataLeft from './dataLeft';
import DataRight from './dataRight'
import { greenTeal } from '../../../assets/sass/base/_variables.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%'
    },
    vol: {
        padding: "3px",
        borderRadius: 3,
        '&:hover': {
            border: `2px solid ${greenTeal}`,
        }
    }
}));


const Vol = ({ vol }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                {!Object.keys(vol).includes('outbound') ?
                    (
                        <Grid container className={classes.vol} justify="center" alignItems="flex-start">
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
                            {vol.inbound.map(voli => {
                                return (
                                    <Grid container className={classes.vol}>
                                        <Grid item md={6} sm={12} >
                                            <DataLeft vol={vol.outbound} />
                                        </Grid>
                                        <Grid container md={6} sm={12} justify="center" alignItems="center">
                                            <DataRight vol={vol.outbound} />
                                        </Grid>
                                        <Grid item md={6} sm={12} >
                                            <DataLeft vol={voli} />
                                        </Grid>
                                        <Grid container md={6} sm={12} justify="center" alignItems="center">
                                            <DataRight vol={voli} />
                                        </Grid>
                                    </Grid>
                                )
                            })}
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