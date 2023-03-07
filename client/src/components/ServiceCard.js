import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Description from './Description';
import { useSelector } from 'react-redux';

function ServiceCard({service, ping, setping}) {
  const user= useSelector((state)=> state.user?.user);
  return (
          <div style={{width:"100%", display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
           
            <Card style={{ width: '29rem' }}>
      <Card.Img variant="top" src={service?.image}  style={{minWidth:"284px", maxWidth:"284px", minHeight:"190px", maxHeight:"190px"}}/>
      <Card.Body>
        <Card.Title>{service?.name}</Card.Title>
        <Card.Text style={{width:"293px"}}>
          
        </Card.Text>
        {/* <Button variant="primary">inscrire</Button> */}
        {user? <Button>
          {" "}
          <Link
            to={`/Description/`+service?._id}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "15px",
            }}
          >
            inscrire
          </Link>
        </Button>:null}
        

      </Card.Body>
    </Card>
           </div>
      
  )
}

export default ServiceCard