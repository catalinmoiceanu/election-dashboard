import React, { Component } from 'react';
import { pushUrl, getUrlForView, getView } from '../../service/urlDataProvider';
import { getOptions } from '../../service/optionProvider';

export default class NavBarDisplay extends Component
{
    onSelectView(event) {
        pushUrl(
            this.props.history,
            getUrlForView(this.props.match, event.target.value, this.props.location.pathname)
        );
    }

    render () {
        return (
            <div className='level-item'>
                <div className='control has-icons-left'>
                    <span className='select is-small'>
                        <select onChange={this.onSelectView.bind(this)} value={getView(this.props.match)}>
                            { getOptions(views) }
                        </select>
                    </span>
                    <span className='icon is-small is-left'>
                        <i className='fas fa-tv'/>
                    </span>
                </div>
            </div>
        )
    }
}

const views = {
    table: 'Tabel',
    graph: 'Grafic'
};