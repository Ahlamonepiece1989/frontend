import React, { useState } from "react";
import {Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import Navi from "./Components/Navbar/Navi";


import HappyBirthday from "./Components/Ocassions/Birthday";
import Marriage from "./Components/Ocassions/Marriage";

import 'bootstrap/dist/css/bootstrap.min.css';
import Graduation from "./Components/Ocassions/Graduation";
import famousDesigners from "./Components/Designers/famousDesigners";
export default function App() {
  const [token, setToken] = useState("");


    {/* useState to store the key search, so it can be passed to another page*/}
  const [searchedItem, setSearchedItem] = useState("");


  console.log(searchedItem);


  return (
    <div>
      
       <Navi token={token} setToken={setToken} setState={setSearchedItem}/>



  <Route
    exact
    path="/"
    render={() => {
    {/* Pass the token and key search*/}
      return <Home token={token} item={searchedItem}/>;
    }}
  />




 <Route   exact path="/signup" component={SignUp} />

 
 <Route
    exact
    path="/signin"
    render={() => {
      {/* set the token using setToken */}
      return <Login setToken={setToken} />;
    }}
  />

<Route
        exact
        path="/happyBirthday"
        render={() => {
        {/* Pass the token and key search*/}
          return <HappyBirthday item={searchedItem}/>;
        }}
      />


      <Route
        exact
        path="/marriage"
        render={() => {
        {/* Pass the token and key search*/}
          return <Marriage item={searchedItem}/>;
        }}
      />


      <Route
        exact
        path="/graduation"
        render={() => {
        {/* Pass the token and key search*/}
          return <Graduation item={searchedItem}/>;
        }}
      />



      <Route path='/famousDesigners' component={famousDesigners} />
</div>
);
}
