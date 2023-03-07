import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';
import navbarimage from "./petit-creatif-logo-1479169753.jpg";
import heimage from "./images/logo.gif";
import { useSelector } from 'react-redux';
const pageacc="current";
const pageservice="current";
const pageactivites="current";
const pageprogramme="current";
const pagecontact="";
const pageespace="";
const pagelogin="";
const pageprofil="";

function Navbarr() {
  const user= useSelector((state)=> state.user?.user);
 
  return (
   
    <div id="header">
  <div> <a href="/"><img className='img_nav' src={navbarimage} alt="" /></a>
    <ul>
      <li class="{pageacc}"><a href="/"><Link to="/" style={{textDecoration:"none", color:""}}>Acceuil</Link></a></li>
      <li><a href="/Service" class="{pageservice}"><Link to="/Service" style={{textDecoration:"none", color:""}}>Service</Link></a></li>
      <li><a href="/activites" class="{pageactivites}"><Link to="/activites" style={{textDecoration:"none", color:""}}>Activités</Link></a></li>
      <li><a href="/programme" class="{pageprogramme}"><Link to="/programme" style={{textDecoration:"none", color:""}}>programme</Link></a></li>
      <li><a href="/contact" class="{pagecontact}"><Link to="/contact" style={{textDecoration:"none", color:""}}>Contact</Link></a></li>
      {!user?  <li><a href="/login" class="{pagelogin}"><Link to="/login" style={{textDecoration:"none", color:""}}>Connection</Link></a></li>:null}
     {user? <li><a href="/profil" class="{pageprofil}"><Link to="/profil" style={{textDecoration:"none", color:""}}>Profile</Link></a></li>:null}
     {user && < button onClick={()=>{localStorage.removeItem('token');setTimeout(() => {
      window.location.reload()
     }, 1000);}}>Deconnexion</button> }
    </ul>
  </div>
</div>
    
  )
}

export default Navbarr;