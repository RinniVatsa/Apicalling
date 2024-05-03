// components/Filter.js
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Filter = ({ onChange }) => {
    const handleFilterChange = value => {
        onChange(value);
    };

    return ( <
        Select mode = "multiple"
        style = {
            { width: '100%', marginBottom: '1rem' }
        }
        placeholder = "Select tags"
        onChange = { handleFilterChange } >
        <
        Option value = "tag1" > history < /Option> <
        Option value = "tag2" > american < /Option> <
        Option value = "tag3" > crime < /Option> < /
        Select >
    );
};

export default Filter;