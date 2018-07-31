import * as UrlHelper from './url/helper';

export default class Request
{
    constructor(routeMatch, defaultId) {
        this.routeMatch = routeMatch;
        this.defaultId = defaultId;
    }

    isGeneral() {
        return this.getRegion() === this.defaultId;
    }

    isGraph() {
        return this.getView() === 'graph';
    }

    getView() {
        return UrlHelper.getView(this.routeMatch) || null;
    }

    getRegion() {
        return UrlHelper.getRegion(this.routeMatch) || this.defaultId;
    }

    getDivision() {
        return UrlHelper.getDivision(this.routeMatch) || null;
    }

    getTown() {
        return UrlHelper.getTown(this.routeMatch) || null;
    }

    getDepth() {
        return (this.getView() ? 1 : 0) * Math.pow(2,0)
            + ((this.getRegion() && ! this.isGeneral()) ? 1 : 0) * Math.pow(2,1)
            + (this.getDivision() ? 1 : 0) * Math.pow(2,2)
            + (this.getTown() ? 1 : 0) * Math.pow(2,3);
    }
}