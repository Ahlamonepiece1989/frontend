import React, { Component } from 'react';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap';
import {
  
    Routes,
    Route
} from "react-router-dom";

import { useHistory } from "react-router-dom";




function Navi({ token, setToken}) {


   const navigate  = useHistory();


  return (

<>

                <div>
      
                <Navbar className="color-nav" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">FLOWERD</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>

        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/ocassion">Occasion</Nav.Link>

        {token ? (
        <Nav.Link onClick={() => {setToken("")
  navigate.push("/login") }}>Sign out</Nav.Link>
       ) : (

<>

       <Nav.Link href="/signup">SignUp</Nav.Link>
        <Nav.Link href="/signin">SignIn</Nav.Link>


</>

       )}
 
        
      </Nav>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => this.searchItems(e.target.value)}

        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
                </div>
                <div>

                
                    
                </div>

    

</>

    );
}


export default Navi;