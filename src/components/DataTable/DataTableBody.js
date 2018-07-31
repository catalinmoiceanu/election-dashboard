import React, { Component } from 'react';
import numeral from 'numeral';

export default class DataTableBody extends Component
{
    getRows() {
        let rows = [];
        for (let key in this.props.dataset) {
            rows.push(this.getRow(key, this.props.dataset[key]));
        }
        return rows;
    }

    getRow(key, unit) {
        return <tr key={ key }>
            <td style={{maxWidth: '25rem'}}>{ unit.n }</td>
            <td>{ numeral(unit.res.r).format('0,0[.]00') }</td>
            <td>{ numeral(unit.res.t).format('0,0[.]00') }</td>
            <td>{ numeral(unit.res.p).format('0,0[.]00') }</td>
            <td>{ numeral(unit.res.l_p).format('0,0[.]00') }</td>
            <td>{ numeral(unit.res.l_a).format('0,0[.]00') }</td>
            <td>{ numeral(unit.res.l_m).format('0,0[.]00') }</td>
        </tr>
    }

    render () {
        return (
            <tbody>
                { this.getRows() }
            </tbody>
        )
    }
}