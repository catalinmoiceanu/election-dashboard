import React, { Component } from 'react';
import * as Url from '../../service/urlDataProvider';
import * as DataProvider from '../../service/dataProvider';
import { getOptions } from '../../service/optionProvider';

export default class NavBarFilter extends Component
{
    onSelectType(event) {
        Url.pushUrl(
            this.props.history,
            Url.getUrlForType(this.props.match, event.target.value || null, this.props.location.pathname)
        );
    }

    onSelectCounty(event) {
        Url.pushUrl(
            this.props.history,
            Url.getUrlForCounty(this.props.match, event.target.value || null, this.props.location.pathname)
        );
    }

    getCounties() {
        return DataProvider.getCounties(this.props.data);
    }

    render () {
        let type = Url.getType(this.props.match);
        let county = Url.getCounty(this.props.match);
        return (
            <React.Fragment>
                <div className='level-item'>
                    <div className='control has-icons-left'>
                        <span className='select is-small'>
                            <select onChange={ this.onSelectType.bind(this) } value={ type } >
                                { getOptions(types) }
                            </select>
                        </span>
                        <span className='icon is-small is-left'>
                            <i className='fas fa-globe'/>
                        </span>
                    </div>
                </div>
                { type === 'region' && <div className='level-item'>
                    <div className='control has-icons-left'>
                        <span className='select is-small'>
                            <select onChange={ this.onSelectCounty.bind(this) } value={ county } >
                                <option value=''>Toate judetele</option>
                                { getOptions(this.getCounties()) }
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

const types = {
    general: 'General',
    region: 'Regional'
};