import React from 'react'
import "./titleafternavcss.css"

export default function TitleAftetNav({title,description}) {
  return (
    <div className='afternavmaincontainer'>
      <div className='afterNavContainer'>
          <p className='title'>{title}</p>
          <p className='smallDescription'>{description}</p>
          
      </div>
      <svg className='roundedge' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 60" aria-hidden="true">
        <path fill="rgba(247, 247, 247, 1)" d="M1920,60H0V0S387,59,960,59,1920,0,1920,0Z"></path>
      </svg>
    </div>
  )
}
