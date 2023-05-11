import React from 'react'
import "./mainblockcss.css"
import { Navigate, useNavigate } from 'react-router-dom'

export default function Mainblock() {
  const Navigate = useNavigate()
  return (
    <div className='mainContainer'>
        <div className="block" onClick={()=>{Navigate("/presentation-personnelle")}}>
            <img src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/Images/undraw_close_tab_re_4cj6-3288072.svg" alt="presentation"  />
            <p className="blocktitle">Présentation personnelle</p>
            <div className="smalldivider"></div>
            <p className="blockdescreption">Présentation personnelle accompagnée de mon parcours interactien</p>
        </div>
        <div className="block" onClick={()=>{Navigate("/vision-du-poste")}}>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/undraw_visionary_technology_re_jfp7-3288613.svg" alt="presentation"  />
            <p className="blocktitle">Vision de poste</p>
            <div className="smalldivider"></div>
            <p className="blockdescreption">Ma vision pour le poste de chef digitalisation</p>
        </div>
        <div className="block" onClick={()=>{Navigate("/stratégies-et-objectifs")}}>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/undraw_predictive_analytics_re_wxt8-3288570.svg" alt="presentation"  />
            <p className="blocktitle">Stratégies et objectifs</p>
            <div className="smalldivider"></div>
            <p className="blockdescreption">Mes stratégies de travail accompagnée de mes objectifs</p>
        </div>
    </div>
  )
}
