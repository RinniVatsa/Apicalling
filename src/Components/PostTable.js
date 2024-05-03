import React, { useState, useEffect } from 'react';
import { Table, Tag, Select, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
const { Search } = Input;
let id = '';

const columns = [{
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => ( <
            >
            {
                tags.map(tag => ( <
                    Tag color = "blue"
                    key = { tag } > { tag } <
                    /Tag>
                ))
            } <
            />
        ),
    },
];

const PostPage = () => {
    const navigate = useNavigate();
    const [rawData, setRawData] = useState([]);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const tags = urlParams.getAll('tags');
    const search = urlParams.get('search');


    useEffect(() => {

        fetchData();
    }, [rawData]);


    function fetchData() {
        fetch(`https://dummyjson.com/posts?skip=${(page - 1) * pagination.pageSize}&limit=${pagination.pageSize}&id=${id}`).
        then((result) => {
            result.json().then((resp) => {
                // console.warn(resp)
                setRawData(resp);
            })
        })
    }


    const handleTableChange = (pagination) => {
        setPagination(pagination.current);
        navigate(`?page=${pagination.current}`);
    };

    const handleTagChange = (values) => {
        setSelectedTags(values);
        navigate(`?tags=${values.join(',')}`);
    };

    const handleSearch = (value) => {
        setSearchQuery(value);
        navigate(`?search=${value}`);
    };

    return ( <
        div >
        <
        div style = {
            { marginBottom: 16 }
        } >
        <
        /
        div > < Table columns = { columns }
        dataSource = {
            (rawData && rawData.posts) || []
        }
        pagination = {
            {
                ...pagination,
                total: (rawData && rawData.total) || 0,
                    showSizeChanger: true,
            }
        }
        onChange = { handleTableChange }
        rowKey = "id" /
        >



        <
        /div>
    );
};

export default PostPage;