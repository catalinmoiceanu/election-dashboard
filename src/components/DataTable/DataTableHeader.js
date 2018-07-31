import React, { Component } from 'react';

export default class DataTableHeader extends Component
{
    getUnitName() {
        let depth = this.props.request.getDepth();

        if (depth > 7) {
            return 'Sectie';
        }

        if (depth > 3) {
            return 'Localitate';
        }

        if (depth > 1) {
            return 'UAT';
        }

        return 'Judet';
    }
    render () {
        return (
            <thead>
                <tr>
                    <th>{ this.getUnitName() }</th>
                    <th>Votanti inregistrati</th>
                    <th>Total votanti</th>
                    <th>Prezenta (%)</th>
                    <th>Liste permanente</th>
                    <th>Liste suplimentare</th>
                    <th>Urna mobila</th>
                </tr>
            </thead>
        )
    }
}