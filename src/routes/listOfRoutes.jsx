import React, { Fragment } from 'react'
import ProtectedRoute from './protectedRoute'
import loadableComponents from './loadableComponents'

const routes = loadableComponents.map(route => {
    const { path, props, name } = route
    const RouteComponent = route.loadableComponent
    function LoadableComponent(anotherProps) {
        return (
            <Fragment>
                <RouteComponent {...props} {...anotherProps} />
            </Fragment>
        )
    }
    return (
        <ProtectedRoute
            key={path}
            path={path}
            render={anotherProps => LoadableComponent(anotherProps)}
            exact={props.exact}
            title={name}
        />
    )
})

export default routes
