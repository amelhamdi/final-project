import React from 'react'
import { useSelector } from 'react-redux'
import InscriptionCard from './InscriptionCard';

function Inscription() {
    const inscri=useSelector((state)=>state.inscription?.inscriptionList);
    const user= useSelector((state)=> state.user?.user);
    console.log(inscri)
    console.log(inscri)
  return (
    <div>

        {inscri?.map((el)=><InscriptionCard inscription={el}/>)}
    </div>)
}

export default Inscription