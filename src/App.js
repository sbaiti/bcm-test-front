import React, { Fragment } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { history } from './store';
import Routes from './routes'
import './assets/sass/style.scss'


function App() {
  return (
    <Fragment>
      <ErrorBoundary>
        <Routes history={history} />
      </ErrorBoundary>
    </Fragment>

  );
}

export default App;