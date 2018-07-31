import React, { Component } from 'react';
import App from './App';
import Request from '../../service/request';
import Loader from './Loader';

class AppWrapper extends Component
{
    constructor(props) {
        super(props);
        this.request = new Request(this.props.match, this.props.data.defaultId);
    }

    componentDidMount() {
        this.props.fetchData(this.props.data.defaultId);
    }

    componentDidUpdate(prevProps) {
        this.request = new Request(this.props.match, this.props.data.defaultId);
        if (! this.props.data.isLoading) {
            this.props.fetchData(this.request.getRegion());
        }
        if(prevProps.match !== this.props.match) {
            this.forceUpdate();
        }
    }

    isLoaded() {
        return ! this.props.data.isLoading && this.props.data.regions.hasOwnProperty(this.request.getRegion());
    }

    getConfig() {
        return {
            defaultRegion: this.props.data.defaultId
        }
    }

    render () {
        return (
            <React.Fragment>
                <Loader loading={ ! this.isLoaded() } />
                { this.isLoaded() && <App route={this.props}
                     dataset={this.props.data}
                     config={this.getConfig()}
                     request={this.request}
                /> }
            </React.Fragment>
        )
    }
}

export default AppWrapper;