import React, { useEffect } from 'react';
import { BrowserRouter as Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import listOfRoutes from './listOfRoutes'

const Routes = ({ history }) => {
    useEffect(() => {
        if (history.location.pathname !== "/result-search-flights")
            history.push({ pathname: "/search-flights" })
    }, [history])
    return (
        <div>
            <main>
                <Switch history={history}>
                    {listOfRoutes.map(route => route)}
                    <Redirect exact from="/" to="/search-flights" />
                </Switch>
            </main>
        </div>
    );
};

Routes.propTypes = {
    history: PropTypes.object.isRequired
}

export default Routes;