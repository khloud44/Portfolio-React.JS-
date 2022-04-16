// import logo from './logo.svg';
import './App.css';

import Home from './Components/HomeComponent/homeComponsnet';
import About from './Components/AboutComponent/aboutComponenet';
import Skill from './Components/SkillsComponent/skillComponent';
import Footer from './Components/FooterComponent/footerComponnent';
import Portfolio from './Components/PortfolioComponent/portfolioComponent';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;


