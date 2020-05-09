import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import RouteViews from './RouteViews';
import NavBar from './NavBar';

const App = () => (
    <Router>
        <Fragment>
            <NavBar />
            <RouteViews />
        </Fragment>    
    </Router>
);