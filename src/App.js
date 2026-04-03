import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Projects from './Projects/Projects.js';

const App = (() => {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={<Home
                    />}
                />
                <Route
                    path="/projects/*"
                    element={<Projects
                    />}
                />
            </Routes>
            <Footer />
        </div>
    );
})

export default App;
