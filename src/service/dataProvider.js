export const getDivisions = (county, data) => {
    if (! data || ! data instanceof Object || ! data.hasOwnProperty('u')) {
        return false;
    }

    let divisions = Object.values(data.u);
    divisions.sort(function(a, b) {
        return a.n.localeCompare(b.n);
    });

    return divisions;
};

export const getPrecincts = (county, data) => {
    let divisions = getDivisions(county, data);

    if (! divisions || (divisions instanceof Array && divisions.length < 1)) {
        return false;
    }

    let precincts = Object.values(Object.values(divisions).reduce(reducer));
    precincts.sort(function(a, b) {
        return parseFloat(a.c) - parseFloat(b.c);
    });

    return precincts;
};

const reducer = (units, unit) => {
    if (unit.hasOwnProperty('u')) {
        if (units instanceof Array) {
            units = [...units, ...Object.values(unit.u)];
        } else {
            units = [...Object.values(units.u), ...Object.values(unit.u)];
        }
    }

    return units;
};