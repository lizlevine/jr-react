import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import SocialFollow from "./components/SocialFollow/SocialFollow";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

class App extends React.Component {
render() {

    return (
        <div className="App">
            <NavBar />
            <Jumbotron />
            <Section />
            <SocialFollow />
            <Footer />
            {/* <FaGithub  color="orangered" size="2em"/> 
            <FaLinkedin  color="orangered" size="2em"/>
            <FaTwitter color="orangered" size="2em"/> */}

        </div>
    );
}
}











export default App;
