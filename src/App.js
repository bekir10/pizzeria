import React from 'react';
import {Route} from "react-router-dom"
import HomePage from './pages/homepage/homepage.component';
import Header from "./components/header/header.component"
import './App.css';
import CheckoutPage from "./pages/checkout/checkout.component"

function App () {
  
    return (
      <div >
        <Header></Header>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
      </div>
    );
  
}

export default App;