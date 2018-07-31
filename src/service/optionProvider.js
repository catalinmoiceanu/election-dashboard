import React from 'react';

export const getOptions = (values) => {
    let options = [];

    for (let [index, value] of values.entries()) {
        options.push(<option key={index} value={ index }>{ value }</option>);
    }

    return <React.Fragment>{ options }</React.Fragment>;
};