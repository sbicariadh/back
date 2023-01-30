import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Navbarr = () => {

 const navigate =  useNavigate()
 const token = localStorage.getItem('token')
 const role = localStorage.getItem('role')

const logout =(token)=>{
 localStorage.removeItem('token')
 localStorage.removeItem('role')
 localStorage.removeItem('id')
  navigate('/')
}
  return (
    <div>
      
         <Navbar bg="dark" variant="dark">
        <Container>

        {token ? (<button onClick={()=>logout()}>logout</button>):(<Navbar.Brand >Navbar</Navbar.Brand>)}
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
          <Nav className="me-auto">
          
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/privetcards">Produits</Nav.Link>
            <Nav.Link as={Link} to="/Contact">contact us</Nav.Link>
            {role =='admin' ?(<Nav.Link as={Link} to="/ap/Privetuser">user</Nav.Link>) : (<p></p>)  }
            {role =='admin' ?(<Nav.Link as={Link} to="/Addproduit">add</Nav.Link>) : (<p></p>)  }
            <Nav.Link as={Link} to="/register">Register/login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </div>
  )
}

export default Navbarr