import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CreateTripPage from './PartePrivada/CreateTripPage';
import LoginPage from './PartePrivada/LoginPage';
import TripDetailsPage from './PartePrivada/TripDetailsPage';
import AppFormPage from './PartePublica/AppFormPage';
import HomePage from './PartePublica/HomePage';
import ListTripsPage from './PartePublica/ListTripsPage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/HomePage" component={HomePage} />
                <Route path="/AppFormPage" component={AppFormPage} />
                <Route path="/ListTripsPage" component={ListTripsPage} />
                <Route path="/CreateTripPage" component={CreateTripPage} />
                <Route path="/LoginPage" component={LoginPage} />
                <Route path="/TripDetailsPage" component={TripDetailsPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;