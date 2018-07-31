import * as UrlHelper from './helper';

export default class UrlProcessor
{
    constructor(route, defaultId) {
        this.route = route;
        this.defaultId = defaultId;
    }

    getRegion() {
        return UrlHelper.getRegion(this.route) || this.defaultId;
    }

    getDivision() {
        return UrlHelper.getDivision(this.route) || null;
    }
}