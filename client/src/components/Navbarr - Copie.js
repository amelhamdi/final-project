import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';
import navbarimage from "./petit-creatif-logo-1479169753.jpg";

function Navbarr() {
  return (
    <div>
       
 <Navbar   className="navbar"  expand="lg">
  <div className='im'>

    <img src={navbarimage} alt='error' /> 
    </div>
      <Container>
        <Navbar.Brand href="/"><h1>Acceuil</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Service" id="basic-nav-dropdown">
          
              <NavDropdown.Item href="/Bus">bus</NavDropdown.Item>
              <NavDropdown.Item href="/Club">Club</NavDropdown.Item>
              <NavDropdown.Item href="/Evenement"><Link to="/event" style={{textDecoration:"none", color:"black"}}>evenement</Link></NavDropdown.Item>
              <NavDropdown.Item href="/Cantine">cantine</NavDropdown.Item>

              <NavDropdown.Divider />
              
            </NavDropdown>

            <NavDropdown title="programme" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">les emploi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">les Fétes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            

            <NavDropdown title="Espace Priveé" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/inscription" style={{textDecoration:"none", color:"black"}}>inscription</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Espace Parent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Espace Enfant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Espace Enseignants</NavDropdown.Item>

              <NavDropdown.Divider />
              
              
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
        <Navbar.Brand href="/connexion"><h1>connexion</h1></Navbar.Brand>

      </Container>
    </Navbar>
    </div>
    
  )
}

export default Navbarr;