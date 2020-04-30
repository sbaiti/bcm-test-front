import React from 'react'
import { Route, withRouter } from 'react-router-dom'

const ProtectedRoute = ({ ...data }) => {
    return <Route {...data} />
}

export default withRouter(ProtectedRoute)
