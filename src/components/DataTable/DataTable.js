import React, { Component } from 'react';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTableFooter from './DataTableFooter';

export default class DataTable extends Component
{
    render () {
        return (
            <div className="table-container column">
                <table className="table is-striped is-fullwidth">
                    <DataTableHeader {...this.props}/>
                    <DataTableBody dataset={this.props.dataset}/>
                    <DataTableFooter totals={this.props.totals}/>
                </table>
            </div>
        )
    }
}