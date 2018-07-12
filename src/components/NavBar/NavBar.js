import React, { Component } from 'react';
import NavBarDisplay from './NavBarDisplay';
import NavBarFilter from './NavBarFilter';

export default class NavBar extends Component
{
    render () {
        return (
            <nav className='navbar is-primary'>
                <div className='container'>
                    <div className='level is-fullwidth'>
                        <div className='level-left'>
                            <NavBarFilter {...this.props}/>
                        </div>
                        <div className='level-right'>
                            <NavBarDisplay {...this.props}/>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}