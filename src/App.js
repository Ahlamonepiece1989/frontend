import React, { useState } from "react";
import {Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import Navi from "./Components/Navbar/Navi";

import React, { useState } from "react";
import {Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import Navi from "./Components/Navbar/Navi";
import 'bootstrap/dist/css/bootstrap.min.css';
import HappyBirthday from "./Components/Ocassions/Birthday";
import Marriage from "./Components/Ocassions/Marriage";
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
<Route path='/happyBirthday' component={HappyBirthday} />
      <Route path='/marriage' component={Marriage} />
      <Route path='/famousDesigners' component={famousDesigners} />
</div>
);
}
