import React from 'react'
import Form from './form'

export default function FormPage() {
  return (
    <div className='formMainContainer'>
      <div className='introductionvotreAvis'>
        <div>
          <p className="votreavismaintitle">Formulaire De Satisfaction</p>
          <p className='maindescreption'>Veuillez remplir ce formulaire afin de donner vos avis sur ce site en tant que prototype.</p>
        </div>
      </div>
      <div className='imgandFormContainer'>
        <img className='votreAvisImage' src="https://content.app-sources.com/s/59331098935990817/thumbnails/640x480/1.0/undraw_super_thank_you_re_f8bo_1-3295265.svg" alt="" />
        <div className="formComponentContainer">
          <Form/>
        </div>
        
      </div>
    </div>
  )
}
