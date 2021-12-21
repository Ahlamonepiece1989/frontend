import React, { useState } from "react";
import {Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import Navi from "./Components/Navbar/Navi";
import Ocassion from "./Components/Ocassions/Ocassion";
import React, { useState } from "react";
import {Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import Navi from "./Components/Navbar/Navi";
import Ocassion from "./Components/Ocassions/Ocassion";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [token, setToken] = useState("");


    {/* useState to store the key search, so it can be passed to another page*/}
  const [searchedItem, setSearchedItem] = useState("");


  console.log(searchedItem);


  return (
    <div>
       {/* Store the token after recieve it.*/}
       <Navi token={token} setToken={setToken} setState={setSearchedItem}/>




{/* Route for home page that contains the roses.*/}
  <Route
    exact
    path="/"
    render={() => {
    {/* Pass the token and key search*/}
      return <Home token={token} item={searchedItem}/>;
    }}
  />





 <Route exact path="/ocassion" component={Ocassion} />

 <Route   exact path="/signup" component={SignUp} />

 {/* After sign in (Log In) the token recieved from the back end will be set, so other routes can use it. (Second step) */}
 <Route
    exact
    path="/signin"
    render={() => {
      {/* set the token using setToken */}
      return <Login setToken={setToken} />;
    }}
  />


</div>
);
}
