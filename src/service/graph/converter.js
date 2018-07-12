export const convert = (totals, options) => {
    if (! totals) {
        return {};
    }

    let { keys, labels, multipleDatasets } = options;

    let data = [];
    let datasets = [];
    for (let i = 0; i < keys.length; i++) {
        let value = totals[keys[i]];
        if (value instanceof Object) {
            multipleDatasets && (data = []);
            for (let item of Object.values(value)) {
                data.push(item);
            }
            multipleDatasets && datasets.push({ data });
        } else {
            data.push(value);
        }
    }
    (! multipleDatasets) && datasets.push({ data });

    return {
        labels: labels,
        datasets
    }
};

const setDatasetProperty = (data, property, value, index) => {
    if (data instanceof Object && data.hasOwnProperty('datasets')) {
        data.datasets = data.datasets.map((item, key) => {
            return (! index || index === key)
                ? Object.assign({}, item, {[property]: value})
                : item;
        });
    }
    return data;
};

export const setLineConfiguration = (data) => {
    if (data instanceof Object && data.hasOwnProperty('datasets')) {
        data.datasets = data.datasets.map((item, key) => {
            return Object.assign(
                {}, item, {
                    fill: false,
                    backgroundColor: item.backgroundColor[key],
                    borderColor: item.backgroundColor[key]
                }
            );
        });
    }
    return data;
};

export const setDatasetLabel = (data, value, index) => {
    if (value instanceof Array) {
        for (let i = 0; i < value.length; i++) {
            data = setDatasetProperty(data, 'label', value[i], i);
        }
        return data;
    }

    return setDatasetProperty(data, 'label', value, index);
};

export const setDatasetBackgroundColour = (data, value, index) => {
    return setDatasetProperty(data, 'backgroundColor', value, index);
};