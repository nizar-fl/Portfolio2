import React from 'react'
import "./footercss.css"
import facebookIcon from "./imgs/facebookIcon.svg"
import instagram from "./imgs/instagram.png"

export default function Footer() {
  return (
    <div className='footerContainer'>
      
      <div className="blocksConatiner">
        
          <div className='leftBlock'>
            <a href="/"><img src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/Images/CNIT_BLEU_1-3292427.png" alt="CNIT_BLEU" /></a>
            <div className="socialmediaslinks">
              <button className="socialmediasbtns"><a href="https://www.facebook.com/mohamedasser.kaabi/"><img src={facebookIcon} alt="facebook" /></a></button>
              <button className="socialmediasbtns"><a href="https://www.instagram.com/esser_kaabi/"><img style={{width: "28px",heigth:"28px"}} src={instagram} alt="" /></a></button>
            </div>
            <img className='rotarylogo' src="https://content.app-sources.com/s/59331098935990817/uploads/1.0/logo_thème_de_lannée_couleurs-3296432.png" alt="rotary" />
          </div>
          <div className='rightBlock'>

            <p className='leftblocktitle'>sommaire</p>
            <div className="seperatingline"></div>
            <a style={{color:"#4eb3ea"}} href="/Presentation-personnelle">Presentation personnelle</a> 
               <a href="/vision-du-poste">Vision du poste</a> 
               <a href="/stratégies-et-objectifs">Strategies et objectifs</a> 
               <a href="/en-relation-avec-le-site">En relation avec le site</a> 
               <a href="/en-relation-avec-l-application">En relation avec l'application</a> 
               <a href="/en-relation-avec-le-comité">En realtion avec le comité</a> 
               <a href="/pourqoi-moi">Pourquoi moi ?</a>
          </div>
      </div>
    </div>
  )
}
