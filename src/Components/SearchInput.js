// components/SearchInput.js
import React, { useState, useEffect } from 'react';
import { Input } from 'antd';





const { Search } = Input;

const SearchInput = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    const handleSearch = value => {
        setSearchText(value);
        onSearch(value);
    };

    return ( <
        div >

        <
        Search placeholder = "Search posts"
        allowClear onSearch = { handleSearch }
        style = {
            { width: 200, marginBottom: '1rem' }
        }
        /> < /div >
    );
};

export default SearchInput;