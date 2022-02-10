import React from "react";
import Header from './components/header';
import Benner from './components/Benner'
import About from './components/About'
import Skill from './components/Skills'
import Writeups from './components/Writeups'

function App() {
    return (
        <>
        <Header/>   
        <Benner/>
        <About/>
        <Skill/>
        <Writeups/>
        </>
    );
}

export default App;
