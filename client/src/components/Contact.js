
import React, { useState } from 'react';
import contactimage from "./images/calling.jpg";



function Contact() {

  return (
<div class="content">
  <div>
    <div> <center><img src={contactimage} alt=""/></center> </div>
    <div>
      <div id="sidebar">
        <h2>les bonnes raisons pour nous choisir</h2>
        <ul>
          <li id="vision"> <span>Pédagogie interactive</span>
            <p>Une pédagogie active et interactive, inspiré des grandes écoles maternelles françaises et anglophones.</p>
          </li>
          <li id="mission"> <span>éducation multilingue</span>
            <p>Vos enfants apprennent à un rythme très bien étudié, les 3 langues : arabe, français et anglais.</p>
          </li>
          <li id="wecare"> <span>Supports ultramodernes</span>
            <p>Des supports pédagogiques ultramodernes, et des jeux éducatifs adaptés à l’âge de vos enfants.
</p>
          </li>
          <li id="wecare"> <span>Clubs variés</span>
            <p>Des clubs de coran, de musique, de peinture et de théâtre gratuits pour tous les niveaux.</p>
          </li>
        </ul>
      </div>
      <div id="contact">
        <h4 class="first">Contact:</h4>
        <p>E-mail: petitcreatif@gmail.com</p>
        <p>télephone:</p>
        <b>+21622693983<br/>
        <br />
        +21652693983
      

        </b>
        <h4>Addresse</h4>
        <p>Tunisie</p>
        <p>Gabes</p>
        <p>Rue med ali</p>
        <p>6011</p>
      </div>

    </div>
  </div>
</div>
  );
};

export default Contact ;