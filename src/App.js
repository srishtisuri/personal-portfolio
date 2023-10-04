import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Roles from './components/Roles/Roles';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        {/* <Experience /> */}
        <Roles />
        <Links />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
