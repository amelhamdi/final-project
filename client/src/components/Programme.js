import React, { useState } from 'react';
import serviceimage from "./images/baby.jpg";

function Programme() {
  return (
<div class="content">
  <div>
  <div> <center><img src={serviceimage} alt="" /> </center></div>
    <div id="services">
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
            <p>Des supports pédagogiques ultramodernes, et des jeux éducatifs adaptés à l’âge de vos enfants.</p>
          </li>
          <li id="wecare"> <span>Clubs variés</span>
            <p>Des clubs de coran, de musique, de peinture et de théâtre gratuits pour tous les niveaux.</p>
          </li>
        </ul>
      </div>
      <div id="aside"><br/>
      <br/><br/><br/><br/>
      <p><h4>Nous vous prions de ramener votre enfant avant 8h30 le matin pour qu’il puisse profiter au maximum de notre programme éducatif et participer pleinement aux activités programmées pour la journée entre 9H00 – 11H30 et 14H00 -16h30.</h4></p>
      <br/>
      <br/>
      <br/>

      <span class="first">Accueil des enfants (goûter + psychomotricité)</span>
      <strong>7:30 – 8:30</strong>            
       <br/>
      <br/>

      <span class="first">Les rituels</span>
      <strong>8:00 – 9:00</strong>          <br/>
      <br/>

      <span class="first">Activités dirigées </span>
      <strong>9:00 – 11:30</strong>          <br/>
      <br/>

      <span class="first">Déjeuner, sieste et toilette</span>
      <strong>14:30 – 14:15</strong>       <br/>
      <br/>
   
      <span class="first">Activités dirigées </span>
      <strong>14:15 – 16:30</strong>          <br/>
      <br/>

      <span class="first">Contes</span>
      <strong>16:30 – 17:00</strong>         <br/>
      <br/>
 
      <span class="first">Collation: </span>
      <strong>15:00 – 15:15</strong>        <br/>
      <br/>
  
      <span class="first">Garde (jeux éducatifs)</span>
      <strong>17h00 – 17h30</strong>    
        
  </div>
  </div>
  </div>
  
      </div>
    

  );
};

export default Programme ;