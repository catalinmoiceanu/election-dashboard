import React, { Component } from 'react';
import Totals from './Totals';
import * as Processor from '../../../service/data/processor';

export default class TotalsWrapper extends Component
{
    render () {
        return <Totals totals={ Processor.processTotals(this.props.request, this.props.dataset) }/>
    }
}