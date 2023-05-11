import React , {useState,useRef} from 'react'
import "./formcss.css"
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom'

export default function Form() {
    const navigate = useNavigate();
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('commentaires', 'template_fffxiip', form.current, 'SPkjmsYmwJx1uRvLg')
        .then((result) => {
            console.log(result.text);
            alert('merci pour votre feedback')
             e.target.reset()
        }, (error) => {
            console.log(error.text);
            e.target.reset()
        });
       
    };











  return (
    <div>
        <form ref={form} onSubmit={sendEmail} >
            <div className='formContainer'>
                <p className='formTitle'>veuillez remplir le formulaire ci-dessous :</p>
                <div className='formfield'>                    
                    <span className='name'>nom</span>
                    <span className='required' style={{color:"red"}}>  *</span>
                    <br />
                    <input className='nameinput input' name='nom' type="text" required autoComplete="off" />
                </div>
                <div className='formfield'>                    
                    <span className='prenom'>prenom </span>
                    <span className='required' style={{color:"red"}}>  *</span>
                    <br />
                    <input className='prenominput input' name='prenom' type="text" required autoComplete="off"  />
                </div>
                <div className='formfield'>                    
                    <span className='email'>email</span>
                    <br />
                    <input className='emailinput input' name='email' type="email"  autoComplete="off"  />
                </div>
                <div className='formfield'>                    
                    <span className='commentaires'>vos commentaires</span>
                    <span className='required' style={{color:"red"}}>  *</span>
                    <br />
                    <textarea className='commentairesinput input' name='commentaires' autoComplete="off"  required  />
                </div>
                <button type='submit' className='submitbtn'>soumettre votre feedback</button>
            </div>
            
        </form>
    </div>
  )
}
