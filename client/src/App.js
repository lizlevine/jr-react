import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

class App extends React.Component {
render() {

    return (
        <div className="App">
            <NavBar />
            <Jumbotron />
            <Container />
            <Footer />
            {/* <FaGithub  color="orangered" size="2em"/> 
            <FaLinkedin  color="orangered" size="2em"/>
            <FaTwitter color="orangered" size="2em"/> */}

        </div>
    );
}
}











export default App;
