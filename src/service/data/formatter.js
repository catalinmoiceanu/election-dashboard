import * as Filter from './filtering';

export const formatRegions = (data) => {
    if (! data || ! data instanceof Object || ! data.hasOwnProperty('u')) {
        return {};
    }

    let counties = new Map();
    for (let [code, unit] of Object.entries(data.u)) {
        counties.set(code, unit.n.toUpperCase());
    }

    return counties;
};

export const formatDivisions = (input) => {
    if (! input || ! input instanceof Array) {
        return {};
    }

    let divisions = new Map();
    for (let division of Object.values(input)) {
        divisions.set(division.c, division.n.toUpperCase());
    }

    return divisions;
};

export const formatTowns = (input, divisionCode) => {
    if (! input || ! input instanceof Array) {
        return {};
    }

    let towns = new Map();
    let division = Filter.filterByCode(Object.values(input), divisionCode);
    if (division.hasOwnProperty('u')) {
        for (let town of Object.values(division.u)) {
            towns.set(town.c, town.n.toUpperCase());
        }
    }

    return towns;
};