import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import About from './components/About/About';
import Client from './components/Client/Client';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThemeContext from './contexts/theme';
import Icon1 from './components/icon/icon';

function App() {
  const { themeName } = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Navbar />
      <Hero />
        <About />
        <Programs />
        <Client />
        <Testimonials />
        <Contact />
        <Footer />
        <Icon1 />
      
    </div>
  );
}

export default App;
