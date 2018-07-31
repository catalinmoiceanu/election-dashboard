import React, { Component } from 'react';
import numeral from "numeral";

export default class Totals extends Component
{
    render () {
        let totals = this.props.totals;
        return (
            <div className="dashboard-totals level container">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Persoane pe liste</p>
                        <p className="title">{numeral(totals.registered).format('0,0[.]00')}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Voturi pe liste permanente</p>
                        <p className="title">{numeral(totals.lists_permanent).format('0,0[.]00')}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Voturi pe liste aditionale</p>
                        <p className="title">{numeral(totals.lists_additional).format('0,0[.]00')}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Voturi prin urna mobila</p>
                        <p className="title">{numeral(totals.lists_mobile).format('0,0[.]00')}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Total voturi</p>
                        <p className="title">{numeral(totals.votes).format('0,0[.]00')}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Prezenta</p>
                        <p className="title">{numeral(totals.presence).format('0,0[.]00')}%</p>
                    </div>
                </div>
            </div>
        )
    }
}