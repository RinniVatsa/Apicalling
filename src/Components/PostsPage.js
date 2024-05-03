// components/PostsPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import PostTable from './PostTable';
import Filter from './Filter';
import SearchInput from './SearchInput';

const { Content } = Layout;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function PostsPage() {
    const navigate = useNavigate();
    const query = useQuery();
    const [filters, setFilters] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const tags = query.getAll('tag');
        setFilters(tags);
        setSearchText(query.get('search'));
    }, [query]);

    const handleFilterChange = value => {
        setFilters(value);
        query.set('tag', value);
        navigate({ search: query.toString() });
    };

    const handleSearch = value => {
        setSearchText(value);
        query.set('search', value);
        navigate({ search: query.toString() });
    };

    return ( <
        Content style = {
            { padding: '24px', minHeight: 'calc(100vh - 112px)' }
        } >
        <
        h1 > Posts < /h1> <
        Filter onChange = { handleFilterChange }
        /> <
        SearchInput onSearch = { handleSearch }
        /> <
        PostTable filters = { filters }
        searchText = { searchText }
        /> < /
        Content >
    );
}

export default PostsPage;