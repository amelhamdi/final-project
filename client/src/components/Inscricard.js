import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addinscription } from '../JS/inscriptionSlice';
import swal from 'sweetalert';

function Inscricard({service, ping, setping}) {
const dispatch=useDispatch();
  const user= useSelector((state)=> state.user?.user);
    const [newinscription, setnewinscription] = useState({
        nameparent : user?.name,
        namefils : "",
        club:service?.name,
        img:service?.image,
        date: "",
        paiment: "espece",
});

  return (
    <div style={{width:"100%", display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
           
    <Card style={{ width: '29rem' }}>
<Card.Img variant="top" src={service?.image}  style={{minWidth:"284px", maxWidth:"284px", minHeight:"190px", maxHeight:"190px"}}/>
<Card.Body>
<Card.Title>{service?.name}</Card.Title>
<Card.Text style={{width:"293px"}}>

</Card.Text>
    <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>club</Form.Label>
        <Form.Control type="text" name="club" placeholder="Enter club" value={service?.name}   />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>nameparent</Form.Label>
        <Form.Control type="text" name="Nameparent" value={user?.name}  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicfils">
        <Form.Label>name fils</Form.Label>
        <Form.Control type="text" name="namefils" placeholder="Enter namefils" onChange={(e) =>
 setnewinscription({ ...newinscription, namefils: e.target.value })}  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicdate">
        <Form.Label>date</Form.Label>
        <Form.Control type="text"  name="date" placeholder="Enter date"   onChange={(e) =>
 setnewinscription({ ...newinscription, date: e.target.value })} />
        
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Type de Payment</Form.Label>
        <Form.Select  name="payment" >
          <option>Espece</option>
          <option>En ligne</option>
        </Form.Select>
      </Form.Group>
      
      
      

      <Button variant="primary"  onClick={()=>{dispatch(addinscription(newinscription)); setping(!ping);swal("Good job!", "You clicked the button!", "success");}}>
        Submit
      </Button>
    </Form>
    </div>


    </Card.Body>
    </Card>
           </div>
  )
}

export default Inscricard