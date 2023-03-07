import React from 'react'

import imfoot1 from "./images/playing-in-grass.gif";
import imfoot2 from "./images/baby-smiling.gif";

function Footer() {
  return (
    
<div id="footer">
  <div>
    <div> <span>Follow us</span> <a href="#" class="facebook">Facebook</a> <a href="https://www.facebook.com/" class="subscribe">Subscribe</a> 
    <a href="#" class="twitter">Twitter</a> </div>
    <ul>
      <li> <a href="#"><img src={imfoot1} alt="" /></a>
        <p>C'est le lieu de rendez-vous des petits créatifs en herbe avec toute une boutique de loisirs créatifs dédiée aux enfants de tous âges.</p>
         </li>
      <li> <a href="#"><img src={imfoot2} alt="" /></a>    

        <p>Écoutez, aimez, encouragez, enseignez, respectez, tolérez, soyez des exemples positifs, développez la confiance en soi, soutenez et encadrez..</p>
         </li>
    </ul>
  </div>
</div>
  )
}

export default Footer