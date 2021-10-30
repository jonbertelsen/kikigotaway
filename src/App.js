import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Slider from './components/Slider';
import Work from './components/Work';
import Footer from './components/Footer';
import About from './components/About';
import Shop from './components/Shop';
import { Accordion, Container } from 'react-bootstrap';

function App()
{
  return (
    <Container>
      <Header />
      <Slider />
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Work</Accordion.Header>
          <Accordion.Body>
            <Work />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>About</Accordion.Header>
          <Accordion.Body>
            <About />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Shop</Accordion.Header>
          <Accordion.Body>
            <Shop />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Footer />
    </Container>
  );
}

export default App;
