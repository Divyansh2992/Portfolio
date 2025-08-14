import './App.css'
import Home from './Components/Home/Home'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Achievements from './Components/Achievements/Achievements'

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Project /></div>
      <div id="achievements"><Achievements /></div>
      <div id="contact"><Contact/></div>
     
     
    </>
  );
}

export default App;
