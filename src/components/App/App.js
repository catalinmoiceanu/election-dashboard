import React, { Component } from 'react';
import DashboardWrapper from '../Dashboard/DashboardWrapper';
import NavBarWrapper from '../NavBar/NavBarWrapper';

export default class App extends Component
{
    render () {
        return (
                <React.Fragment>
                    <NavBarWrapper {...this.props}/>
                    <DashboardWrapper {...this.props}/>
                </React.Fragment>
        )
    }
}