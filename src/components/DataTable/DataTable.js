import React, { Component } from 'react';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTableFooter from './DataTableFooter';

export default class DataTable extends Component
{
    render () {
        console.log(this.props);
        return (
            <div className="table-container column">
                { this.props.data
                    ? <table className="table is-striped is-fullwidth">
                        <DataTableHeader isGeneral={this.props.isGeneral}/>
                        <DataTableBody precincts={this.props.precincts} isGeneral={this.props.isGeneral}/>
                        { this.props.totals && <DataTableFooter totals={this.props.totals} isGeneral={this.props.isGeneral}/> }
                    </table>
                    : <div>Loading...</div> }
            </div>
        )
    }
}