import React, { Component } from 'react';
import { DataTable } from '../DataTable';

export default class TableView extends Component
{
    render () {
        return (
            <div className="container columns">
                <DataTable {...this.props} />
            </div>
        )
    }
}