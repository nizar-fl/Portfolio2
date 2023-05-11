import React from 'react'
import "./PourquoiMcss.css"
import TitleAftetNav from '../title/titleAftetNav'
import Linkbutton from '../Linkbutton/Linkbutton'
import { Link, useNavigate } from 'react-router-dom'
import zynebImage from "./assests/zaynb.jpg"
import lamis from "./assests/lamis.jpg"
import darine from "./assests/darine.jpg"

export default function PourquoiM() {
  const navigate = useNavigate();
  return (
    <div className=''>
      <TitleAftetNav title="Pourquoi Moi ?"/>
      <div className="PM-container">
        <div className='SBContainer'>
          
          <img src={darine} alt="" />
          <div className="speech">
            <h3>Darine Jameli ,cheffe internationale :</h3>
            <p>étant non seulement l’une des personnes les plus sérieux mais aussi les plus talentueux que j’ai jamais fréquentés, je peux vous assurer qu’asser avec son caractère et ses diverses qualités est parfaitement désigné pour ce poste.</p>
          </div>

        </div>
        <div className='SBContainer'>
          <img src={lamis} alt="" />
          <div className="speech">
            <h3>Lemis Zeramdini ,secrétaire actuelle ,<br />Drc zone 7 :</h3>
            <p>Le 2 septembre 2021 , une date clé dans ma vie d'interactienne , le jour où j'ai passé mon entretien d'embauche pour intégrer le club et le jour où j'ai rencontré Asser .
            Durant sa période d'essai , il a fourni un grand effort d'assiduité ,  d'activité et d'automie pour arracher sa place dans le club et être un membre officiel . Tous les deux , on a mis des objectifs dès notre entrée : occuper des postes dans le bureau exécutif et travailler au bénifice de notre club. Asser a perfectionné toutes ses tâches dans la trésorie et aussi entant que membre . Son amour pour l'innovation, l'informatique et le dévloppement des sites web l'a poussé à vouloir occuper la direction d'une mission qu'il trouve intéressante et importante pour le progrès du mouvement interactien en Tunisie .
            Il possède la motivation , l'autonomie et le talent nécessaire pour se charger de cette mission.</p>
            
          </div>

        </div>
        <div className='SBContainer'>
          <img src={zynebImage} alt="" />
          <div className="speech">
            <h3>Zayneb Selmi , vice presidente actuelle :</h3>
            <p>Deux mandats au sein du bureau exécutif, des expériences éblouissantes dans le milieu interactien, une présence infallible dans les actions du club, une relation étroite avec tous ses membres, un rendement sans-faute et une persévérance inébranlable. Quoi de meilleur dans le parcours d'un interactien aussi assidu de Mohamed Asser Kaabi ? J'ai eu l'énorme plaisir de le côtoyer pour presque 4 ans maintenant au sein du meme club et je ne peux que confirmer que son profil correspond parfaitement à un chef de la mission digitalisation. Du côté personnel, il sait nouer les liens et travailler en équipe et du côté professionnel il a toujours présenté un membre muni de la motivation nécessaire pour ce poste</p>
          </div>

        </div>
        <div className='SBContainer'>
          <img src="https://media.discordapp.net/attachments/979848835545321472/1105987179785748511/abbes.jpg?" alt="" />
          <div className="speech">
            <h3>Yassmine Abbes ,présidente actuelle de l'icsg ,<br /> secrétaire adjointe actuelle de la CNIT:</h3>
            <p>Que dire de Asser? Ou plutôt que ne pas dire de Asser? Un interactien travailleur, un membre créatif et une belle âme. Asser est l’equilibre parfait entre développement personnel et professionnel, qui sert de membre actif et d’ami sur lequel tu peux toujours compter</p>
          </div>

        </div>


      </div>
      <div onClick={()=>{navigate("/votre-avis")}}><Linkbutton title='vote avis'  /></div>      
    </div>
  )
}
