import React from 'react'
import { useSelector } from 'react-redux'
import ServiceCard from './ServiceCard';

function Evenement() {
    const services=useSelector((state)=>state.service?.serviceList);
    console.log(services)
  return (
    <div>

        {services?.filter((el)=>el.cathegorie=="evenement").map((el)=><ServiceCard service={el}/>)}
        
    </div>
  )
}

export default Evenement