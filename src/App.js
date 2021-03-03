import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Hero />
        </>
    )
}

export default App
