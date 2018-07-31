import * as Filter from "./filtering";
import { extendObject } from "../helper/object";

export const processTotals = (request, dataset) => {
    let region = request.getRegion(),
        object = getCurrentObject(request, dataset);

    return convert(object || dataset.regions[region]);
};

export const processDataset = (request, dataset) => {
    let region = request.getRegion(),
        object = getCurrentObject(request, dataset);

    if (object) {
        return object.u;
    }

    return Object.values(dataset.regions[region].u).reduce((units, item) => {
        let children = Object.values(item.u).map((child) => {
            return extendObject(child, { dn: item.n });
        });
        return [...units, ...children];
    }, []);
};

const getCurrentObject = (request, dataset) => {
    let region = request.getRegion(),
        division = request.getDivision(),
        town = request.getTown();

    if (request.isGeneral()) {
        return dataset.regions[region];
    }

    if (division) {
        let currentDivision = Filter.filterByCode(dataset.divisions[region], division);
        return town ? Filter.filterByCode(Object.values(currentDivision.u), town) : currentDivision;
    }

    return false;
};

export const convert = (input) => {
    return {
        registered: input.res.r,
        votes: input.res.t,
        lists_permanent: input.res.l_p,
        lists_additional: input.res.l_a,
        lists_mobile: input.res.l_m,
        presence: input.res.p,
        absentees: input.res.ab,
        urban: input.res.ur,
        rural: input.res.ru,
        male_votes_by_age: getObjectWithoutKey('t', input.res.m),
        male_total: input.res.m.t,
        female_votes_by_age: getObjectWithoutKey('t', input.res.f),
        female_total: input.res.f.t
    };
};

const getObjectWithoutKey = (key, object) => {
    let clone = {...object};
    delete clone[key];
    return clone;
};