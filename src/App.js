import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import DigitalMarketing from './component/UI/DigitalMarketing.js';

function App() {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/digital-marketing" element={<DigitalMarketing theme={theme} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const Home = ({ theme }) => (
  <>
    <Hero theme={theme} />
    <Counter />
    <Clients />
    <Services />
    <AboutMe />
    <Team />
    <Blog />
    <Testimonials />
    <NewsLetter />
  </>
);

export default App;
