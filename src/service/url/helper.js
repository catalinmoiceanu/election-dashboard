export const getUrl = (routerMatch, params, currentPath) => {
    if (typeof params !== 'object') {
        return false;
    }

    let {type, view, region, division, town} = routerMatch.params;

    let array = [
        params.view || view || 'table',
        params.type || type || 'general',
        params.region !== null ? (params.region || region) : null,
        params.division !== null ? (params.division || division) : null,
        params.town !== null ? (params.town || town) : null
    ];

    let path = '/' + array.filter(item => item !== undefined && item !== null).join('/');
    return path !== currentPath ? path : false;
};

export const getUrlForView = (routerMatch, view, currentPath) => {
    return getUrl(routerMatch, { view }, currentPath);
};

export const getUrlForType = (routerMatch, type, currentPath) => {
    return getUrl(routerMatch, { type, region: null, division: null, precinct: null }, currentPath);
};

export const getUrlForRegion = (routerMatch, region, currentPath) => {
    return getUrl(routerMatch, { region, division: null, precinct: null }, currentPath);
};

export const getUrlForDivision = (routerMatch, division, currentPath) => {
    return getUrl(routerMatch, { division, precinct: null }, currentPath);
};

export const getUrlForPrecinct = (routerMatch, town, currentPath) => {
    return getUrl(routerMatch, { precinct }, currentPath);
};

export const getType = (routerMatch) => {
    return routerMatch.params.type;
};

export const getView = (routerMatch) => {
    return routerMatch.params.view;
};

export const getRegion = (routerMatch) => {
    return routerMatch.params.region;
};

export const getDivision = (routerMatch) => {
    return routerMatch.params.division;
};

export const getTown = (routerMatch) => {
    return routerMatch.params.town;
};

export const pushUrl = (history, url) => {
    if (history && history.hasOwnProperty('push') && url) {
        history.push(url);
    }
};