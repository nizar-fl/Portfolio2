import React from 'react'
import TitleAftetNav from '../components/title/titleAftetNav';
import Topintroduction from '../components/topintroduction/topintroduction';
import Mainblock from '../components/mainblock/mainblock';
import Footer from '../components/footer/footer';
import CopyrightSection from '../components/footer/copyrightSection';

export default function MainPage() {
  return (
    <div>
        <Topintroduction/>
        <TitleAftetNav title="Introduction" description="Bienvenue dans mon dossier de candidature au poste de chef digitalisation au sein de la cnit en sorte de site web , je vous souhaite le bienvenue . Voici donc le sommaire de ce dossier :"/>
        <Mainblock/>
        
    </div>
  )
}
