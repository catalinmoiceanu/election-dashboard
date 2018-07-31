import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { DashboardConfiguration } from '../../configuration/dashboard';

export default class DashboardWrapper extends Component
{
    render () {
        return (
            <Dashboard {...this.props} config={DashboardConfiguration()}/>
        )
    }
}