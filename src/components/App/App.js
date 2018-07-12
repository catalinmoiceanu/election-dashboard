import React, { Component } from 'react';
import { Dashboard } from '../Dashboard';
import { NavBar } from '../NavBar';
import Loader from './Loader';

export default class App extends Component
{
    getNavBar() {
        if (! this.props.data || ! this.props.data.regions.hasOwnProperty(this.props.defaultRegion)) {
            return <React.Fragment/>;
        }

        return <NavBar {...this.props.route} data={this.props.data.regions[this.props.defaultRegion]} />;
    }

    getDashboard() {
        if (! this.props.data || ! this.props.data.regions.hasOwnProperty(this.props.data.currentRegion)) {
            return <React.Fragment/>;
        }

        return (
            <Dashboard
                route={this.props.route.match}
                data={this.props.data.regions[this.props.data.currentRegion]}
                isGeneral={this.props.requestedRegion === this.props.defaultRegion}
                totals={this.props.data.totals[this.props.data.currentRegion]}
                precincts={this.props.data.precincts[this.props.data.currentRegion]}
            />
        );
    }

    isLoading() {
        return ! this.props.data
            || this.props.data.currentRegion !== this.props.requestedRegion
            || ! this.props.data.regions.hasOwnProperty(this.props.data.currentRegion);
    }

    render () {
        return (
                <React.Fragment>
                    <Loader loading={ this.isLoading() } />
                    { this.getNavBar() }
                    { this.getDashboard() }
                </React.Fragment>
        )
    }
}