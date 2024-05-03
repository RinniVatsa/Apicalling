// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import PostTable from './Components/PostTable';
import PostsPage from './Components/PostsPage';
import NotFoundPage from './Components/NotFoundPage';

const { Content } = Layout;

function App() {
    return (




        <
        Router >
        <
        Layout className = "layout" >
        <
        Content >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < PostsPage / > } > < /Route >  <
        Route exact path = "/
        " element={< NotFoundPage />}></Route>   < /
        Routes > < /
        Content > < /
        Layout > <
        /Router>
    );
}

export default App;