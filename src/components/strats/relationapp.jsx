import React from 'react'
import TitleAftetNav from '../title/titleAftetNav'
import './stratscss.css'
import imageIcon from  './strats assets/imageIcon.svg'
import settingIcon from  './strats assets/settingIcon.svg'
import shareIcon from  './strats assets/shareIcon.svg'
import TransferIcon from  './strats assets/TransferIcon.svg'
import Linkbutton from '../Linkbutton/Linkbutton'


export default function Relationapp() {
  return (
    <div >
        <TitleAftetNav title="En relation avec l'application "/>
        <div className='CC'>
        <div className="ReApp-mainContainer">
            <div className="ReApp-leftbox">

                <div className="ReApp-Small-P-block">
                    <div className="ReApp-flexContainer">
                        <img src={settingIcon} alt="Icon" />
                        <p className='Small-P-block-title'>Planification stratégique </p>
                    </div>
                    <p className='Small-P-block-description'>Définir  les étapes de la préparation de l'application : <br /> estimation budgétaire si nécessaire+ répartition des taches .</p>
                </div>
                <div className="ReApp-Small-P-block">
                    <div className="ReApp-flexContainer">
                        <img src={imageIcon} alt="Icon" />
                        <p className='Small-P-block-title'>Design de l'interface de l'application </p>
                    </div>
                    <p className='Small-P-block-description'>Choisir un design pour les interfaces de l'application.</p>
                </div>
                


            </div>
            <div className="ReApp-box ReApp-middlebox">
                <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/application_mobile-3571107.png" alt="" />
            </div>
            <div style={{marginLeft:"10px"}} className="ReApp-rightbox">


                <div className="ReApp-Small-P-block">
                        <div className="ReApp-flexContainer">
                            <img src={TransferIcon} alt="icon" />
                            <p className='Small-P-block-title'>transfert de base de données </p>
                        </div>
                        <p className='Small-P-block-description'>effectuer l'opération de transfert de base de données des comptes des interactiens  à partir du site vers  l'application.</p>

                </div>
                <div className="ReApp-Small-P-block">
                        <div className="ReApp-flexContainer">
                            <img src={shareIcon} alt="icon" />
                            <p className='Small-P-block-title'>lancement de l'application </p>
                        </div>
                        <p className='Small-P-block-description'>
                        lancement de l'application en sorte d'action financière : <br />

                                -diner<br />

                                -soirée<br />

                            -clôture avec le lancement officiel de l'application<br />
                        </p>

                </div>
            </div>

        </div>

        
        <a href="/en-relation-avec-le-comité"><Linkbutton title="En relation avec le comité"/></a>




        </div>
    </div>
  )
}
