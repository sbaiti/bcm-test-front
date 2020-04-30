import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import TabPanel from '../../ui/tabPanel'
import Vols from './vols'

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        fontWeight: 600,
        fontSize: 17,
        fontStyle: 'italic'
    }
}));

const GroupByPrice = ({ prices }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {prices.map((price, index) =>
                        <Tab key={index} className={classes.tab} label={`${price.price} €`} {...a11yProps(0)} />
                    )}
                </Tabs>
            </AppBar>
            <div style={{ height: `calc(100vh - 32vh)`, overflow: 'auto' }}>
                {prices.map((vol, index) =>
                    <TabPanel value={value} key={index} index={index}>
                        <Vols vols={vol.combinations} />
                    </TabPanel>
                )}
            </div>
        </div >
    );
};

GroupByPrice.propTypes = {
    prices: PropTypes.array.isRequired
};

export default GroupByPrice;