import React from 'react'


function InscriptionCard({inscription}) {
  return (
    <div>   
     <h1>{inscription?.club}</h1>
     <h6>{inscription?.date}</h6>
     <h6>{inscription?.price}</h6>
     
    </div>
  )
}

export default InscriptionCard