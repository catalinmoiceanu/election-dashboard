import React, { Component } from 'react';

export default class Loader extends Component
{
    render () {

        return (
            <div className={`pageloader ${this.props.loading && 'is-active is-secondary'}`}>
                    <span className="title">
                        { this.props.loading && 'Incarcare date' }
                    </span>
            </div>
        )
    }
}