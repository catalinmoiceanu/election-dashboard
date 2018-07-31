import React, { Component } from 'react';
import * as Url from '../../service/urlDataProvider';
import {formatRegions, formatDivisions, formatTowns} from '../../service/data/formatter';
import { getOptions } from '../../service/optionProvider';

export default class NavBarFilter extends Component
{
    onSelectType(event) {
        Url.pushUrl(
            this.props.history,
            Url.getUrlForType(this.props.match, event.target.value || null, this.props.location.pathname)
        );
    }

    onSelectRegion(event) {
        Url.pushUrl(
            this.props.history,
            Url.getUrlForRegion(this.props.match, event.target.value || null, this.props.location.pathname)
        );
    }

    onSelectDivision(event) {
        Url.pushUrl(
            this.props.history,
            Url.getUrlForDivision(this.props.match, event.target.value || null, this.props.location.pathname)
        );
    }

    onSelectTown(event) {
        Url.pushUrl(
            this.props.history,
            Url.getUrlForTown(this.props.match, event.target.value || null, this.props.location.pathname)
        );
    }

    getRegions() {
        return formatRegions(this.props.data);
    }

    getDivisions() {
        return formatDivisions(this.props.divisions);
    }

    getTowns() {
        return formatTowns(this.props.divisions, this.getDivision());
    }

    getType() {
        return Url.getType(this.props.match);
    }

    getRegion() {
        return Url.getRegion(this.props.match);
    }

    getDivision() {
        return Url.getDivision(this.props.match);
    }

    getTown() {
        return Url.getTown(this.props.match);
    }

    render () {
        return (
            <React.Fragment>
                <div className='level-item'>
                    <div className='control has-icons-left'>
                        <span className='select is-small'>
                            <select onChange={ this.onSelectType.bind(this) } value={ this.getType() || '' } >
                                { getOptions(getTypes()) }
                            </select>
                        </span>
                        <span className='icon is-small is-left'>
                            <i className='fas fa-globe'/>
                        </span>
                    </div>
                </div>
                { this.getType() === 'region' && <div className='level-item'>
                    <div className='control has-icons-left'>
                        <span className='select is-small'>
                            <select onChange={ this.onSelectRegion.bind(this) } value={ this.getRegion() || '' } >
                                <option value=''>Toate judetele</option>
                                { getOptions(this.getRegions()) }
                            </select>
                        </span>
                        <span className='icon is-small is-left'>
                            <i className='fas fa-globe'/>
                        </span>
                    </div>
                </div> }
                { this.getRegion() && <div className='level-item'>
                    <div className='control has-icons-left'>
                        <span className='select is-small'>
                            <select onChange={ this.onSelectDivision.bind(this) } value={ this.getDivision() || '' } >
                                <option value=''>Toate UAT</option>
                                { getOptions(this.getDivisions()) }
                            </select>
                        </span>
                        <span className='icon is-small is-left'>
                            <i className='fas fa-globe'/>
                        </span>
                    </div>
                </div> }
                { this.getDivision() && <div className='level-item'>
                    <div className='control has-icons-left'>
                        <span className='select is-small'>
                            <select onChange={ this.onSelectTown.bind(this) } value={ this.getTown() || '' } >
                                <option value=''>Toate localitatile</option>
                                { getOptions(this.getTowns()) }
                            </select>
                        </span>
                        <span className='icon is-small is-left'>
                            <i className='fas fa-globe'/>
                        </span>
                    </div>
                </div> }
            </React.Fragment>
        )
    }
}

const getTypes = () => {
    let types = new Map();
    types.set('general', 'General');
    types.set('region', 'Regional');
    return types;
};