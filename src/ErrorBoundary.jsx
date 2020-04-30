import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        console.log('error', error)
        return { hasError: true }
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <div>
                    <center>
                        <h1>Something went wrong </h1>
                    </center>
                </div>
            )
        }

        return children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.object.isRequired,
}

export { ErrorBoundary }