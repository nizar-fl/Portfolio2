import React from 'react'
import TitleAftetNav from '../title/titleAftetNav'
import './stratscss.css'
import Linkbutton from '../Linkbutton/Linkbutton'

export default function Relationcom() {
  return (
    <div> 
        <TitleAftetNav title="En relation avec le comité"/>
        <div className='mainContainer1'>
            
            <div className="block1 ">
                <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/la-plume-3485712.png" alt="presentation"  />
                <p className="blocktitle1">Secrétaire générale </p>
                <div className="smalldivider1"></div>
                <p className="blockdescreption1">-Développer l'idée de la copie audio des P.V des réunions.</p>
            </div>
            <div className="block1">
                <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/290143_cash_money_payment_wallet_icon-3486083.svg" alt="presentation"  />
                <p className="blocktitle1">Trésorier</p>
                <div className="smalldivider1"></div>
                <p className="blockdescreption1">-Effectuer des mises à jours continue à la boutique interactienne.</p>
            </div>
            <div className="block1">
                <img src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/Images/justice-court-svgrepo-com-3486441.svg" alt="presentation"  />
                <p className="blocktitle1">Chef du protocole</p>
                <div className="smalldivider1"></div>
                <p className="blockdescreption1">-Développer un système de suivi d'assiduité pour les membres de la CNIT (absences ,activité,...)</p>
            </div>
        </div>
        <a href="/pourqoi-moi"><Linkbutton title="Pourquoi moi"/></a>
    </div>
  )
}
