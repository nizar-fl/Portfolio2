import React from 'react'
import logo from "./imgs/CNIT BLANC.png"
import "./navbarcss.css"
import { styled } from '@mui/material/styles';
import Tooltip, {  tooltipClasses } from '@mui/material/Tooltip';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from "react";
import menuIcon from "./imgs/menuIcon.svg"
import offcanvasCloseIcon from "./imgs/closebtnIcon.svg"
import { Link, useNavigate } from 'react-router-dom'






const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    width:"230px",
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    borderRadius:"0px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "row",

    
  },
}));





export default function Navbar() {

  
  return (
    <div className='navbarcontainer'>
      <div className='menuContainer'>
        <button className="phonemenu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" ><img src={menuIcon} alt='menuIcon'  /></button>
        
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
          <div className="offcanvas-header darkbgcolor">
            {/* <h5 className="offcanvas-title " id="offcanvasTopLabel">Menu</h5> */}
            <button type="button" className='offcanvasClosebtn' data-bs-dismiss="offcanvas" aria-label="Close"><img src={offcanvasCloseIcon} alt="close" /></button>
          </div>
          <div style={{textAlign:"center"}} className="offcanvas-body darkbgcolor">
            <div className='offcanvasLinksContainer'>
               <a style={{color:"#4eb3ea"}} href="/Presentation-personnelle">Presentation personnelle</a> 
               <a href="/vision-du-poste">Vision du poste</a> 
               <a href="/stratégies-et-objectifs">Strategies et objectifs</a> 
               <a href="/en-relation-avec-le-site">En relation avec le site</a> 
               <a href="/en-relation-avec-l-application">En relation avec l'application</a> 
               <a href="/en-relation-avec-le-comité">En realtion avec le comité</a> 
               <a href="/pourqoi-moi">Pourquoi moi ?</a>
               <a href="/votre-avis"><button className='navbtn'>votre avis</button></a>
            </div>
          </div>
        </div>
      </div>
      <div  className='logo'><a href="/">
        <img className='logoimg' src={logo} alt="logo"  /></a>
      </div>
      <div className='toplinksContainer'>
        <a href='/presentation-personnelle'>Presentation personnelle</a>
        <a href='/vision-du-poste'>Vision du poste</a>
        <HtmlTooltip
        title={
          <div>
            <div className='tooltipInsideLinks' ><a href="en-relation-avec-le-site">En relation avec le site</a></div>
            <div className='tooltipInsideLinks' ><a href="en-relation-avec-l-application">En relation avec l'application</a></div>
            <div className='tooltipInsideLinks' ><a href="en-relation-avec-le-comité">En realtion avec le comité</a></div>
          </div>
            }
          >
           <a href="/stratégies-et-objectifs"><button className='tooltipbtn'>Strategies et objectifs </button></a>
        </HtmlTooltip>  

        <a href='/pourqoi-moi'>Pourquoi moi ?</a>
        <a href="/votre-avis"><button className='navbtn'>Votre avis</button></a>

      </div>
      
    </div>
  )
}
