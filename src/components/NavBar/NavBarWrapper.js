import React, { Component } from 'react';
import NavBar from './NavBar';

export default class NavBarWrapper extends Component
{
    render () {
        return (
            <NavBar {...this.props.route}
                    data={this.props.dataset.regions[this.props.dataset.defaultId]}
                    divisions={this.props.dataset.divisions[this.props.request.getRegion()]}
            />
        )
    }
}