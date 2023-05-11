import React from 'react'
import TitleAftetNav from '../title/titleAftetNav'
import './stratscss.css'
import { useNavigate } from 'react-router-dom'

export default function Strats() {
    const navigate = useNavigate()
  return (
    <div>
        <TitleAftetNav title='stratégies et objectifs '/>
        <div className='strats-main-block'>
            <div  onClick={()=>navigate("/en-relation-avec-le-site")} className="strats-block">
                <h3>en relation avec le site </h3>
                <img src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/1.0/site_relation-3315580.svg" alt="" />
            </div>
            <div  onClick={()=>navigate("/en-relation-avec-l-application")} className=" secondstratsblock strats-block">
                <h3>en relation avec l'application</h3>
                <img src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/1.0/undraw_my_app_re_gxtj-3315693.svg" alt="" />
            </div>
            <div onClick={()=>navigate("/en-relation-avec-le-comité")} className="strats-block">
                <h3>en relation avec le comité</h3>
                
                <img src="https://content.app-sources.com/s/59331098935990817/uploads/1.0/undraw_engineering_team_a7n2-3315831.svg" alt="" />
            </div>
        </div>
    </div>
  )
}
