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
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route


function App() {
  const { themeName } = useContext(ThemeContext);

  return (
    
      <div className={`app ${themeName}`}  id="top">
        <Router>
          <Routes>
            <Route path="/" element={
            <>
            <Navbar />
            <Hero />
            <About />
            <Programs />
            <Client />
            <Testimonials />
            <Contact />
            <Footer />
            </>
          } />
         <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        <Icon1 />
        </Router>
      </div>
  );
}

export default App;
