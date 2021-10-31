import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Slider from './components/Slider';
import Work from './components/Work';
import Footer from './components/Footer';
import About from './components/About';
import Shop from './components/Shop';
import { Container } from 'react-bootstrap';
import Accordion from "./components/Accordion";
import Contact from './components/Contact';

function App()
{
  return (
    <Container>
      <Header />
      <Slider />

      <div className="accordionContainer">
        <Accordion title="Work" contentComponent={Work} sectionClass="accordion__section" accordionClass="accordion" titleClass="accordion__title" contentClass="accordion__content" arrowWidth="10" activeClass="active" />
        <Accordion title="About" contentComponent={About} sectionClass="accordion__section" accordionClass="accordion" titleClass="accordion__title" contentClass="accordion__content" arrowWidth="10" activeClass="active" />
        <Accordion title="Contact" contentComponent={Contact} sectionClass="accordion__section" accordionClass="accordion" titleClass="accordion__title" contentClass="accordion__content" arrowWidth="10" activeClass="active" />
        <Accordion title="Shop" contentComponent={Shop} sectionClass="accordion__section" accordionClass="accordion" titleClass="accordion__title" contentClass="accordion__content" arrowWidth="10" activeClass="active" />
      </div>

      <Footer />
    </Container>
  );
}

export default App;
