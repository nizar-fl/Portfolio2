import React from 'react'
import "./Linkbuttoncss.css"
import { Link, useNavigate } from 'react-router-dom'

export default function Linkbutton({title}) {
    const navigate = useNavigate(); 
    

  return (

    <div className='buttonContainer'>
        <button  className='linkbutton'>{title}</button>
    </div>
  )
}
