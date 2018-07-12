export const getUrl = (routerMatch, params, currentPath) => {
    if (typeof params !== 'object') {
        return false;
    }

    let {type, view, county, division, town} = routerMatch.params;

    let array = [
        params.view || view || 'table',
        params.type || type || 'general',
        params.county !== null ? (params.county || county) : null,
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
    return getUrl(routerMatch, { type, county: null, division: null, town: null }, currentPath);
};

export const getUrlForCounty = (routerMatch, county, currentPath) => {
    return getUrl(routerMatch, { county }, currentPath);
};

export const getUrlForDivision = (routerMatch, division, currentPath) => {
    return getUrl(routerMatch, { division }, currentPath);
};

export const getUrlForTown = (routerMatch, town, currentPath) => {
    return getUrl(routerMatch, { town }, currentPath);
};

export const getType = (routerMatch) => {
    return routerMatch.params.type;
};

export const getView = (routerMatch) => {
    return routerMatch.params.view;
};

export const getCounty = (routerMatch) => {
    return routerMatch.params.county;
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