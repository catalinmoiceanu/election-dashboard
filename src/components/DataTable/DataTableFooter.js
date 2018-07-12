import React, { Component } from 'react';
import numeral from "numeral";

export default class DataTableFooter extends Component
{
    render () {
        return (
            <tfoot>
                <tr>
                    <td colSpan={this.props.isGeneral ? 1 : 2}>Total</td>
                    <td>{ numeral(this.props.totals.registered).format('0,0[.]00') }</td>
                    <td>{ numeral(this.props.totals.votes).format('0,0[.]00') }</td>
                    <td>{ numeral(this.props.totals.presence).format('0,0[.]00') }</td>
                    <td>{ numeral(this.props.totals.lists_permanent).format('0,0[.]00') }</td>
                    <td>{ numeral(this.props.totals.lists_additional).format('0,0[.]00') }</td>
                    <td>{ numeral(this.props.totals.lists_mobile).format('0,0[.]00') }</td>
                </tr>
            </tfoot>
        )
    }
}