import './fonts/fonts.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Work from './components/Work';
import Footer from './components/Footer';
import About from './components/About';
import Shop from './components/Shop';
import {Container} from 'react-bootstrap';
import Accordion from "./components/Accordion";
import Contact from './components/Contact';
import {Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <Container fluid className="p-0">
            <Header/>


                <div className="accordionMainContainer">
                    <div>
                        <Accordion title="Work" contentComponent={Work} sectionClass="accordion_section"
                                   accordionClass="accordion" titleClass="accordion_title"
                                   contentClass="accordion_content" arrowWidth="60" activeClass="active"/>
                    </div>
                    <div className="accordionBorder">
                        <Accordion title="About" contentComponent={About} sectionClass="accordion_section"
                                   accordionClass="accordion" titleClass="accordion_title"
                                   contentClass="accordion_content" arrowWidth="60" activeClass="active"/>
                    </div>
                    <div className="accordionBorder">
                        <Accordion title="Contact" contentComponent={Contact} sectionClass="accordion_section"
                                   accordionClass="accordion" titleClass="accordion_title"
                                   contentClass="accordion_content" arrowWidth="60" activeClass="active"/>
                    </div>
                    <div className="accordionBorder">
                        <Accordion title="Shop" contentComponent={Shop} sectionClass="accordion_section"
                                   accordionClass="accordion" titleClass="accordion_title"
                                   contentClass="accordion_content" arrowWidth="60" activeClass="active"/>
                    </div>
                </div>
                <div className="accordionBorder">
                    <Footer/>
                </div>
        </Container>
    );
}

export default App;
