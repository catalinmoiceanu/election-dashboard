import React, { Component } from 'react';
import * as Graph from '../DataGraph';
import {
    convert,
    setDatasetBackgroundColour,
    setDatasetLabel,
    setLineConfiguration
}  from '../../service/graph/converter';

export default class Widget extends Component
{
    getData() {
        return convert(this.props.totals, this.props.options);
    }

    getBarData() {
        let data = this.getData();

        data = setDatasetBackgroundColour(data, this.props.options.colour);
        data = setDatasetLabel(data, this.props.options.label);

        return data;
    }

    getLineData() {
        let data = this.getData();

        data = setDatasetBackgroundColour(data, this.props.options.colour);
        data = setLineConfiguration(data);
        data = setDatasetLabel(data, this.props.options.label);

        return data;
    }

    getPieData() {
        let data = this.getData();

        data = setDatasetBackgroundColour(data, this.props.options.colour);

        return data;
    }

    getComponentLabel() {
        return this.props.options.forcedLabel || this.props.options.label;
    }

    getObject() {
        switch (this.props.options.type) {
            case "bar":
                return <Graph.Bar title={this.getComponentLabel()} data={ this.getBarData() } />;
                break;
            case "line":
                return <Graph.Line title={this.getComponentLabel()} data={ this.getLineData() } />;
                break;
            case "pie":
                return <Graph.Pie title={this.getComponentLabel()} data={ this.getPieData() } />;
                break;
            case "doughnut":
                return <Graph.Doughnut title={this.getComponentLabel()} data={ this.getPieData() } />;
                break;
            default:
                console.warn('Invalid widget type.');
                return <React.Fragment/>;
        }
    }

    render () {
        this.getObject();
        return (
            this.props.dataset.precincts ? this.getObject() : <h1>Loading...</h1>
        )
    }
}