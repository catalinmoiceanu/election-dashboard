export const getTotals = (county, data) => {
    return {
        registered: data.res.r,
        votes: data.res.t,
        lists_permanent: data.res.l_p,
        lists_additional: data.res.l_a,
        lists_mobile: data.res.l_m,
        presence: data.res.p,
        absentees: data.res.ab,
        urban: data.res.ur,
        rural: data.res.ru,
        male_votes_by_age: getObjectWithoutKey('t', data.res.m),
        male_total: data.res.m.t,
        female_votes_by_age: getObjectWithoutKey('t', data.res.f),
        female_total: data.res.f.t
    };
};

const getObjectWithoutKey = (key, object) => {
    let clone = {...object};
    delete clone[key];
    return clone;
};

export const getCounties = (data) => {
    if (! data || ! data instanceof Object || ! data.hasOwnProperty('u')) {
        return {};
    }

    let counties = {};
    for (let [code, unit] of Object.entries(data.u)) {
        counties[code] = unit.n;
    }

    return counties;
};

export const getPrecincts = (county, data) => {
    if (! data || ! data instanceof Object || ! data.hasOwnProperty('u')) {
        return {};
    }

    let precincts = Object.values(Object.values(Object.values(data.u).reduce(reducer)).reduce(reducer));

    precincts.sort(function(a, b) {
        return parseFloat(a.c) - parseFloat(b.c);
    });

    return precincts;
};

const reducer = (units, unit) => {
    if (unit.hasOwnProperty('u')) {
        if (units instanceof Array) {
            units = [...units, ...Object.values(unit.u)];
            units = units.map(
                (value) => value.hasOwnProperty('pn') ? value : Object.assign({}, value, {pn: unit.n})
            );
        } else {
            let defaultUnit = units;
            units = [...Object.values(units.u), ...Object.values(unit.u)];
            units = units.map((value) => Object.assign({}, value, {pn: defaultUnit.n}));
        }
    }
    return units;
};