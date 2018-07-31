import React, { Component } from 'react';
import { TableView, GraphView }  from '../View';
import TotalsWrapper from './Totals/TotalsWrapper';

export default class Dashboard extends Component
{
    render () {
        return (
            <React.Fragment>
                <TotalsWrapper {...this.props} />
                { this.props.request.isGraph()
                    ? <GraphView {...this.props} config={this.props.config.view.graph} />
                    : <TableView {...this.props} config={this.props.config.view.table} /> }
            </React.Fragment>
        )
    }
}