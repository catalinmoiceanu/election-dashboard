import React, { Component } from 'react';
import Widget from '../Widget';

export default class GraphView extends Component
{
    getColumns() {
        let columns = [];
        for (let i = 0; i < this.props.config.widgets.length; i++) {
            columns.push(<div key={i} className={`column is-${this.props.config.widgets[i].size}`}>
                <Widget {...this.props} options={ this.props.config.widgets[i] }/>
            </div>);
        }
        return columns;
    }

    render() {
        return (
            <React.Fragment>
                <div className="widget-container container columns is-multiline">
                    { this.getColumns() }
                </div>
            </React.Fragment>
        );
    }
}