import React, { Component } from 'react';
import { DataTable } from '../DataTable';
import * as Processor from '../../service/data/processor';

export default class TableView extends Component
{
    render() {
        return (
            <div className="container columns">
                <DataTable dataset={ Processor.processDataset(this.props.request, this.props.dataset) }
                           totals={ Processor.processTotals(this.props.request, this.props.dataset) }
                           request={ this.props.request }
                />
            </div>
        )
    }
}