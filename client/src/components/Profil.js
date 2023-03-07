import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { edituser, logout } from '../JS/userSlice/userSlice';
import "./profil.css";
import Table from 'react-bootstrap/Table';
import { deleteinscription } from '../JS/inscriptionSlice';

function Profil({ping, setping}) {
    const user= useSelector((state)=> state.user?.user);
    const inscriptions= useSelector((state)=> state.inscription?.inscriptionList);
    console.log(inscriptions)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [edit, setedit] = useState({
      name: user?.name,
      LastName: user?.LastName,
      email: user?.email,
      password: user?.password,
    })
  return (

<div class="content">
  <div>


    <div style={{marginTop:"100px"}}>
        {/* <h1>hello {user?user.name:<h1>...Loading</h1>}</h1>
      <button onClick={()=>{dispatch(logout());navigate("/logi")}}>logout</button> */}
            <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right" style={{display:"flex", flexDirection:"column"}}>
            <div className="d-flex flex-column align-items-center text-center p-3 py-5" style={{display:"flex", flexDirection:"column"}}>
              <img className="rounded-circle mt-5 profileimg" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="text-black-50">{user?.name} {user?.LastName}</span><span className="text-black-50">{user?.email}</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
               <center> <h4 className="text-left">Profile Settings</h4></center>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder={user?.name} onChange={(e)=>setedit({...edit, name:e.target.value})} /></div>
                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder={user?.LastName} onChange={(e)=>setedit({...edit, LastName:e.target.value})}/></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Email</label><input type="email" className="form-control" placeholder={user?.email} onChange={(e)=>setedit({...edit, email:e.target.value})} /></div>
                <div className="col-md-6"><label className="labels">Password</label><input type="password" className="form-control"  placeholder={user?.password} onChange={(e)=>setedit({...edit, password:e.target.value})}/></div>
              </div>
              
              
         
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button"  onClick={() => {
              dispatch(edituser({ id: user._id, edit }));
              setping(!ping);
            }}>Save Profile</button></div>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
               <center> <h4 className="text-left">Mes inscriptions</h4></center>
              </div>
              <div className="row mt-2">
              <Table striped bordered hover style={{width:"722px"}}>
      <thead>
        <tr>
          <th>img</th>
          <th>namefils</th>
          <th>club</th>
          <th>date</th>
          <th>paiment</th>
        </tr>
      </thead>
      <tbody>
        {inscriptions?.filter((el)=>el?.nameparent==user?.name).map((el)=> <tr>
          <td><img src={el?.img} style={{width:"25px", height:"25px"}}/></td>
          <td>{el?.namefils}</td>
          <td>{el?.club}</td>
          <td>{el?.date}</td>
          <td>{el?.paiment}</td>
          <td><button onClick={()=>{dispatch(deleteinscription(el._id)); setping(!ping)}}>X</button></td>
        </tr>)}
      </tbody>
    </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
 </div>
 </div>
</div>
  )
}

export default Profil

   //  <button  onClick={() => {
        //             setTimeout(() => {localStorage.removeItem("token");
                     
        //               navigate("/logi");
        //             }, 1000);}} >logout</button> 