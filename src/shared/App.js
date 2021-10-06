import './App.css';
import React from 'react';

import {BrowserRouter, Route} from "react-router-dom"
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import Header from '../components/Header';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <BrowserRouter>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/Signup" exact component={Signup}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
