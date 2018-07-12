import React, { Component } from 'react';
import App from './App';
import * as Url from '../../service/urlDataProvider';
import * as DataProvider from '../../service/dataProvider';
import { getCountyFileUrl } from '../../service/api/url';
import Worker from '../../service/api/worker';

export default class AppContainer extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            currentRegion: null,
            regions: {},
            precincts: {},
            totals: {}
        };

        this.default = {
            region: 'RO'
        };

        this.worker = new Worker();
    }

    componentDidMount() {
        this.fetchData(this.default.region);
    }

    componentDidUpdate(prevProps, prevState) {
        let county = this.getCounty();

        if (prevState.currentRegion === county) {
            return;
        }

        if (this.state.regions.hasOwnProperty(county) && this.state.currentRegion !== county) {
            this.setState({ currentRegion: county });
        }

        if (! this.state.regions.hasOwnProperty(county)) {
            this.fetchData(county);
        }
    }

    fetchData(county) {
        this.worker.postMessage(getCountyFileUrl(county));
        this.worker.addEventListener("message", function (event) {});
        this.worker.onmessage = (event) => {
            this.setState({
                regions: Object.assign(
                    {}, this.state.regions, { [county] : event.data }
                ),
                precincts: Object.assign(
                    {}, this.state.precincts, this.getPrecincts(county, event.data)
                ),
                totals: Object.assign(
                    {}, this.state.totals, { [county]: DataProvider.getTotals(county, event.data) }
                )
            });
        };
    }

    getCounty() {
        return Url.getCounty(this.props.match) || this.default.region;
    }

    getPrecincts(county, data) {
        if (county === this.default.region) {
            return { [county]: data.u };
        }
        return { [county]: DataProvider.getPrecincts(county, data) };
    }

    render () {
        return (
            <React.Fragment>
                <App route={this.props}
                     data={this.state}
                     defaultRegion={this.default.region}
                     requestedRegion={this.getCounty()}
                />
            </React.Fragment>
        )
    }
}