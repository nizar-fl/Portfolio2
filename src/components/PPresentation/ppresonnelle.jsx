import React from 'react'
import TitleAftetNav from '../title/titleAftetNav'
import checkMarkIcon from './assests/checkmark-icon.svg'
import "./ppresonnellecss.css"
import Linkbutton from '../Linkbutton/Linkbutton'

export default function PPersonnelle() {
  return (
    <div className='PPMainContainer'>
        <TitleAftetNav title="Présentation Personnelle" />
        <div className="selfpresentation">
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/moi_1.0-3289490.jpg" alt="" />
            <div className='selfpresentationParagraph'>
                <p className="selfpresentationtitle">Je me présente :</p>
                <div className='achievements'>
                    <div className="achievement">
                        <img style={{width:"23px",marginRight:"20px"}} src={checkMarkIcon} alt="" />
                        <p className='achievementdes'>Mohamed Esser kaabi   , né le 30 mars 2007.</p>
                    </div>
                    <div className="achievement">
                        <img style={{width:"23px",marginRight:"20px"}} src={checkMarkIcon} alt="" />
                        <p className='achievementdes'>élève de 2eme année sciences au Lycée Pilote Bourguiba.</p>
                    </div>
                    <div className="achievement">
                        <img style={{width:"23px",marginRight:"20px"}} src={checkMarkIcon} alt="" />
                        <p className='achievementdes'>certifié en web developping level 1 </p>
                    </div>
                    <div className="achievement">
                        <img style={{width:"23px",marginRight:"20px"}} src={checkMarkIcon} alt="" />
                        <p className='achievementdes'>passionné par le football et le domaine d'informatique.</p>
                    </div>    
                </div>
            </div>
        </div>
        <div className="secondblock">
            <p className="secondblocktitle">Mon parcours interactien</p>
            <p className='secondblockdescription'>Je vous présente mon parcours interactien qui a débuté le 03 octobre 2021 :</p>
            <div className="undersecondblock">
                <div className='secondblockrightblock'>
                    <div className="secondachievement">
                        <div className='gridbox'>
                            <img style={{width:"25px",marginRight:"20px",marginTop:"18px"}} src={checkMarkIcon} alt="" />
                            <div>
                                <p className='achievementseconddes'>Membre de l interact club saint germain</p>
                                <p className='achievementsecondunderdes'>j'étais nominé comme membre le 03 octobre 2021 et c'était le début de mon aventure dans la vie interactienne .</p>
                            </div>
                        </div>
                        <div className='gridbox'>
                            <img style={{width:"25px",marginRight:"20px",marginTop:"18px"}} src={checkMarkIcon} alt="" />
                            <div>
                                <p className='achievementseconddes'>Chef d'action hivers au chaud</p>
                                <p className='achievementsecondunderdes'>j'étais le chef de l'action typique hivers au chaud de mandat 2021-2022.</p>
                            </div>
                        </div>
                        <div className='gridbox'>
                            <img style={{width:"25px",marginRight:"20px",marginTop:"18px"}} src={checkMarkIcon} alt="" />
                            <div>
                                <p className='achievementseconddes'>Trésorier adjoint 2021-2022</p>
                                <p className='achievementsecondunderdes'>après le succès de l'action hivers au chaud . ma décision est prise de postuler puis d'être le trésorier adjoint de mandat 2021-2022</p>
                            </div>
                        </div>
                        
                    </div> 
                </div>
                <div className='secondblockleftblock'>
                    <div className='gridbox'>
                        <img style={{width:"25px",marginRight:"20px",marginTop:"18px"}} src={checkMarkIcon} alt="" />
                        <div>
                            <p className='achievementseconddes'>Trésorier 2022-2023</p>
                            <p className='achievementsecondunderdes'>après l'expérience au bureau élargi j'ai Monti vers l'exécutif en étant le trésorier de mandat 2022-2023</p>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        <div className="thirdBlock">
            <br /><br /><br /><br /><br />
            
            
            <p className="third-block-title secondblocktitle">Séminaires et Formations</p>
            <div className="third-under-block">
                <div className='miniblock'>
                    <img  src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/Images/congress-3291187.jpg" alt="" />
                    <h2>congres national 3.0</h2>
                    <p>-formation gestion de stress</p>
                </div>
                <div className='miniblock'>
                    <img  src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/Images/leaders-3291179.jpg" alt="" />
                    <h2>leaders Act 21-22</h2>
                    <p>-formation des trésoriers</p>
                    <p>-formation gestion d'équipe</p>


                </div>
                <div className='miniblock'>
                    <img  src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/Images/sfi-3291193.jpg" alt="" />
                    <h2>congres national 3.0</h2>
                    <p>-formation gestion de stress</p>
                </div>
            </div>

            
        </div>
        <div style={{justifySelf:"center"}}>
        <a href="/vision-du-poste"><Linkbutton title="Vision du poste"/></a></div>
           
    </div>
  )
}
