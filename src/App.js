import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import MainPage from './pages/mainPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VisiondupostePage from './pages/VisiondupostPage';
import Footer from './components/footer/footer';
import CopyrightSection from './components/footer/copyrightSection';
import VotreavisPage from './pages/votreavisPage';
import PPersonnellePage from './pages/PPersonnellePage';
import StratsPage from './pages/stratsPage';
import EnrelationPage from './pages/EnrelationPage';
import RelationavSite from './pages/relationavSite';
import EnrelatoinavAppPage from './pages/EnrelatoinavAppPage';
import PourquoiMoiPage from './pages/PourquoiMoiPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/vision-du-poste" element={<VisiondupostePage/>}/>
          <Route path="/votre-avis" element={<VotreavisPage/>} /> 
          <Route path="/presentation-personnelle" element={<PPersonnellePage/>} />
          <Route path="/stratégies-et-objectifs" element={<StratsPage/>} />   
          <Route path="/en-relation-avec-le-comité" element={<EnrelationPage/>} />  
          <Route path="/en-relation-avec-le-site" element={<RelationavSite/>} />
          <Route path="/en-relation-avec-l-application" element={<EnrelatoinavAppPage/>} />  
          <Route path="/pourqoi-moi" element={<PourquoiMoiPage/>}/>
        </Routes>
        <Footer/>
        <CopyrightSection/>
      </Router>
      
      
    </div>
  );
}

export default App;
