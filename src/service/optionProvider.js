import React from 'react';

export const getOptions = (values) => {
    let options = [];

    for (let index in values) {
        if (values.hasOwnProperty(index)) {
            options.push(
                <option key={index} value={ index }>{ values[index] }</option>
            );
        }
    }

    return <React.Fragment>{ options }</React.Fragment>;
};