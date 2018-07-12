import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AppContainer } from '../App';

const Router = props => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/:view/:type/:county/:town/:precinct" component={ AppContainer } />
                <Route exact path="/:view/:type/:county/:town" component={ AppContainer } />
                <Route exact path="/:view/:type/:county" component={ AppContainer } />
                <Route exact path="/:view/:type" component={ AppContainer } />
                <Route path="/" component={ AppContainer } />
            </Switch>
        </React.Fragment>
    )
};

export default Router;