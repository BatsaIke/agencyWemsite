
import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './component/Footer.js';
import AboutMe from './component/UI/AboutMe.js';
import Blog from './component/UI/Blog.js';
import Counter from './component/UI/Counter.js';
import Hero from './component/UI/Hero.js';
import NewsLetter from './component/UI/NewsLetter.js';
import Services from './component/UI/Services.js';
import Team from './component/UI/Team.js';
import Testimonials from './component/UI/Testimonials.js';
import Header from './component/header/Header.js';
import Clients from './component/UI/Clients.js';

function App() {
const [theme, setTheme]=useState('')

const toggleTheme =()=>{
  theme ==='' ? setTheme('light-theme'): setTheme('')
}

useEffect(()=>{
document.body.className= theme
},[theme])

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero  theme={theme} />
      <Counter/>
      <Services/>
      <AboutMe/>
      <Clients/>
      <Team/>
      <Blog/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
