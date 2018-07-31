export const getCountyFileUrl = (county) => {
    return window.location.protocol + '//' + window.location.host + '/data/results_' + county + '.json';
};

export const getFileUrl = (id) => {
    return window.location.protocol + '//' + window.location.host + '/data/results_' + id + '.json';
};