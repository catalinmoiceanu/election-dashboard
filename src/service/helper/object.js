export const extendObject = (base, props) => {
    return Object.assign({}, base, props);
};

export const compareObjects = (a, b) => {
    return JSON.stringify(Object.keys(a).sort()) === JSON.stringify(Object.keys(b).sort());
};