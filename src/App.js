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
  return (
    <div>
      <Navi token={token} setToken={setToken} />
    
       <Route exact path="/" component={Home} />

       <Route exact path="/ocassion" component={Ocassion} />

     <Route   exact path="/signup" component={SignUp} />
     <Route
        exact
        path="/signin"
        render={() => {
          //// set the token using setToken
          return <Login setToken={setToken} />;
        }}
      />
        
   
    </div>
  );
}



