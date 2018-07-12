import React, { Component } from 'react';
import { TableView, GraphView }  from '../View';
import DashboardTotals from './DashboardTotals';
import { DashboardConfiguration } from '../../configuration/dashboard';

export default class Dashboard extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            config: DashboardConfiguration()
        };
    }

    isGraph() {
        return this.props.route.params && this.props.route.params.view === 'graph';
    }

    render () {
        return (
            <React.Fragment>
                <DashboardTotals totals={this.props.totals} />
                { this.isGraph()
                    ? <GraphView {...this.props} config={this.state.config.view.graph} />
                    : <TableView {...this.props} config={this.state.config.view.table} /> }
            </React.Fragment>
        )
    }
}