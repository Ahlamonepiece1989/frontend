import React, { useState } from 'react';
import { Navbar, NavDropdown, Form, FormControl, Nav, Container } from 'react-bootstrap';




import { useHistory } from "react-router-dom";






function Navi({ token, setToken, setState}) {


   const navigate  = useHistory();

//Drop Down list//
 {/* UseState to show and hide the dropdown list*/}
   const [show, setShow] = useState(false);
//I give the state defult value"false"

 {/* Show the dropDown list */}
   const showDropdown = ()=>{
    setShow(!show);
  }

  const hideDropdown = () => {
    setShow(false);
  }



  {/* The output were True or False*/}
  console.log(show);






//Serach//
  const searchItems = (searchValue) => {

    setState(searchValue); 

  {/* Display the key that the user searched*/}
     console.log(searchValue);

        };
    






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


         <NavDropdown
          id="nav-dropdown-dark-example"
          title="Occasions"
          show={show}
          onMouseEnter={showDropdown} 
          onMouseLeave={hideDropdown}
        >
          <NavDropdown.Item href="/happyBirthday">Happy Birthday</NavDropdown.Item>
          <NavDropdown.Item href="/marriage">Marriage</NavDropdown.Item>



        </NavDropdown>

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
          onChange={(e) => searchItems(e.target.value)}

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



