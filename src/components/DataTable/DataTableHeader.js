import React, { Component } from 'react';

export default class DataTableHeader extends Component
{
    render () {
        return (
            <thead>
                <tr>
                    { this.props.isGeneral && <th>Judet</th> }
                    { ! this.props.isGeneral && <th>Localitate</th> }
                    { ! this.props.isGeneral && <th>Sectie</th> }
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