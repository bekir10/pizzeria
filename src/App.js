import React from 'react';
import {Route} from "react-router-dom"
import HomePage from './pages/homepage/homepage.component';
import Header from "./components/header/header.component"
import './App.css';

function App () {
  
    return (
      <div >
        <Header></Header>
        <Route exact path="/" component={HomePage}></Route>
      </div>
    );
  
}

export default App;