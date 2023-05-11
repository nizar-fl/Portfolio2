import React from 'react'
import './visionduposte.css'
import Linkbutton from '../Linkbutton/Linkbutton'

export default function Visionduposteblock() {
  return (
    <div className='CC'>
    <div className='mainContainer1'>
        <a style={{textDecoration:"none"}} href="https://interacttunisie.org/index">
        <div className="block1 web">
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/www-3293716.png" alt="presentation"  />
            <p className="blocktitle1">le site web</p>
            <div className="smalldivider1"></div>
            <p className="blockdescreption1">-Occupation de la mise en place d’un site Web pour la CNIT<br/>- la création de l’accessibilité aux différentes plateformes numériques que nécessite la CNIT ( application...)</p>
        </div>
        </a>
        <div className="block1">
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/structure-hierarchique-3293751.png" alt="presentation"  />
            <p className="blocktitle1">la commission</p>
            <div className="smalldivider1"></div>
            <p className="blockdescreption1">-supervision continue de la commission de digitalisation-prise en considération des idées des membre de la commission</p>
        </div>
        <div className="block1">
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/soutien-3293737.png" alt="presentation"  />
            <p className="blocktitle1">coté relationnel</p>
            <div className="smalldivider1"></div>
            <p className="blockdescreption1">-travail en collaboration avec les chefs missions de l CNIT .<br/>-travail en collaboration avec les membres de comité de la CNIT.</p>
        </div>
        
    </div>
        <div style={{justifySelf:"center"}}>
            <a href="/stratégies-et-objectifs"><Linkbutton title="stratégies et objectifs"/></a>
        </div>
    </div>
    
  )
}
