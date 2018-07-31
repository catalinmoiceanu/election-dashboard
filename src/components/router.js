import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';

const Router = props => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/:view/:type/:region/:division/:town/:precinct" component={ AppContainer } />
                <Route exact path="/:view/:type/:region/:division/:town" component={ AppContainer } />
                <Route exact path="/:view/:type/:region/:division" component={ AppContainer } />
                <Route exact path="/:view/:type/:region" component={ AppContainer } />
                <Route exact path="/:view/:type" component={ AppContainer } />
                <Route path="/" component={ AppContainer } />
            </Switch>
        </React.Fragment>
    )
};

export default Router;