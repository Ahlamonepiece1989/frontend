import React, { Component } from 'react';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap';
import {
  
    Routes,
    Route
} from "react-router-dom";



import Home from './Home';

import Occasion from './Occasion';

import SignUp from './SignUp';



function nav() {


	return (

<>

                <div>
      
                <Navbar className="color-nav" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">My Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>

        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/occasions">occasion</Nav.Link>
        <Nav.Link href="/signup">signup</Nav.Link>
        
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
                    <Routes>


                    <Route exact path='/occasions' element={<Occasion/>}/>

                    <Route exact path='/signup' element={<SignUp/>}/>

                    <Route  exact path='/' element={<Home />}/>
                     
                    </Routes>
                </div>

    

</>

		);
}


export default nav;