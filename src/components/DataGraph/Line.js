import React, { Component } from 'react';
import * as Charts from 'react-chartjs-2';

export default class Line extends Component {
    render() {
        return (
            <div>
                <h2 className="title has-text-centered">{this.props.title}</h2>
                <Charts.Line data={this.props.data} />
            </div>
        );
    }
};