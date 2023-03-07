
import React, { useState } from 'react';
import serviceimage from "./images/baby.jpg";



function Service() {

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
            <p>Des supports pédagogiques ultramodernes, et des jeux éducatifs adaptés à l’âge de vos enfants.
</p>
          </li>
          <li id="wecare"> <span>Clubs variés</span>
            <p>Des clubs de coran, de musique, de peinture et de théâtre gratuits pour tous les niveaux.</p>
          </li>
        </ul>
      </div>
      <div id="aside">
         <span class="first">Service</span>
        <ul class="section">
          <li>Bus</li>
          <li>cantine</li>
          <li>Club</li>
          <li>programe educatif</li>
        </ul>
        <span>Nos valeurs pédagogiques</span>
         <b><li>Favoriser le développement global de l’enfant dans toutes ses dimensions</li></b>
          <b><li>Favoriser un environnement d’épanouissement et de fraternité</li></b>
           <b><li>Enseigner le respect et la discipline</li></b>
            <b><li>Encourager le travail d’équipe et la générosité</li></b> 
            <b><li>Préparer l’enfant pour l’école</li></b>
            <span>Inscription</span>
        <div>
          <ol>
            <li>Demande de dossier d'inscription</li>
            <li>Merci pour l’intérêt que vous portez à notre institution.</li>
            <li><p>Pour l’inscription en ligne de votre enfant, nous vous prions de remplir le formulaire de demande de dossier d’inscription ci-dessous. Vous recevrez par email l’ensemble des procédures et les documents relatifs à la future inscription de votre enfant au sein de notre établissement.</p></li>
            <li><p>L’admission d’un enfant ne devient définitive que lorsque les renseignements et pièces justificatives du dossier de demande d’inscription sont en la possession de l’administration, les droits de scolarité acquittés et le règlement intérieur dûment signé par les parents de l’enfant (le père et la mère, le cas échéant le tuteur légal).</p></li>
          </ol>
        
        </div>
        <span>Programe educatif</span>
        <div>
          <ol>
            <li>Demande de dossier d'inscription</li>
            <li>Merci pour l’intérêt que vous portez à notre institution.</li>
            <li><p>Pour l’inscription en ligne de votre enfant, nous vous prions de remplir le formulaire de demande de dossier d’inscription ci-dessous. Vous recevrez par email l’ensemble des procédures et les documents relatifs à la future inscription de votre enfant au sein de notre établissement.</p></li>
            <li><p>L’admission d’un enfant ne devient définitive que lorsque les renseignements et pièces justificatives du dossier de demande d’inscription sont en la possession de l’administration, les droits de scolarité acquittés et le règlement intérieur dûment signé par les parents de l’enfant (le père et la mère, le cas échéant le tuteur légal).</p></li>
        
          </ol>
        
        </div>


      </div>
    </div>
  </div>
</div>

  );
};

export default Service ;