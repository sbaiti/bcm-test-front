import React from 'react'
import Loadable from 'react-loadable'
import { SpinnerHourGlass } from '../components/ui/spinner/spinner'

const loadableComponents = [
    {
        loadableComponent: Loadable({
            loader: () => import('../screens/resultResearch/index'),
            loading: () => <SpinnerHourGlass />,
            timeout: 5000
        }),
        path: '/result-search-flights',
        props: {
            exact: true,
        },
        name: 'ResultResearch',
        showWhenConnected: false,
    },
    {
        loadableComponent: Loadable({
            loader: () => import('../screens/searchFlights/index'),
            loading: () => <SpinnerHourGlass />,
            timeout: 5000
        }),
        path: '/search-flights',
        props: {
            exact: true,
        },
        name: 'ResearchFlights',
        showWhenConnected: false,
    }
]

export default loadableComponents
