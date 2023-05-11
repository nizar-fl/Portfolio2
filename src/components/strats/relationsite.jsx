import React from 'react'
import './stratscss.css'
import Linkbutton from '../Linkbutton/Linkbutton'
import TitleAftetNav from '../title/titleAftetNav'

export default function Relationsite() {
  return (
    <div >
        <TitleAftetNav title="En relation avec le site"/>
        <div className='relation-avec-siteContainer'>
        <div className='first-rs-block'>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/1.0/capture_decran_2.0-3362795.png" alt="" />
            <div className="middle-rs-block">
                <h3 className='secondblocktitle'>Paiement en ligne</h3>
                <br />
                <br />
                <p >La mission digitalisation a pour objectif de faciliter les procédures traditionnelles et les rendre plus rapides et plus efficaces . C'est pourcela que je propose une nouvelle option au sein  qui permettera d'effectuer  le payement des frais de participations aux séminaires . Ceci rendra alors cette tâche plus dynamique .</p>
            </div>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/paiement_4.0-3364041.png" alt="" />
        </div>
        <div className="second-rs-blockContainer">
          <h3 className='secondblocktitle'>Livraison à domicile</h3>
          <div className='second-rs-block'>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/undraw_on_the_way_re_swjt-3374408.svg" alt="" />
            <p style={{marginTop:"70px",fontSize:"18px"}}>-Mettre à disposition l'option de livraison à domicile (avec préparation d'estimation budgétaire)</p>
          </div>
        </div>
        <div style={{textAlign:"center",marginTop:"300px"}} className="third-rs-block">
          <h3 className='secondblocktitle'>Mises à jours du site</h3>
          <img style={{width:"80%",marginTop:"70px"}} src="https://content.app-sources.com/s/59331098935990817/uploads/1.0/site_cnitos_-3317520.png" alt="" />
        </div>
        <div  className="fourth-rs-block">
          <p>-Effectuer des mises à jours continues pour le site de la CNIT   pour appliquer le thème de séminaire ou évènement ( Leaders act, Congrés national ,S.F.I) ou des autres évènements (Christmas, Halloween,....) VOIR LES PROTOTYPES DISPONIBLES DANS LE DOSSIER DRIVE </p>
        </div>
        <div className="second-rs-blockContainer">
          <h3 className='secondblocktitle'>Virtualisation  des badges et des certificats</h3>
          <div className='second-rs-block'>
            <img src="https://cdn.discordapp.com/attachments/979848835545321472/1105982045584380034/application_mobile_1.png" alt="" />
            <p style={{marginTop:"70px",marginLeft:"50px",fontSize:"18px"}}>-Créer une version virtuelle des badges des participants qui sera incluse dans le compte interactien.Ainsi qu'une version virtuelle de leurs  certficats .</p>
          </div>
          <br />
          <br /><br />
        </div>
        
    
        <a href="/en-relation-avec-l-application"><Linkbutton title="En relation avec l'application" /></a>
        </div>
      </div>
  )
}
