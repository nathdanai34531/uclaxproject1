import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';


import Home from '../Pages/Home.jsx';
import About from '../Pages/About.jsx';
import Contact from '../Pages/Contact.jsx';




const Main = () => {
    return (
        <main className='Main'>
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </main>

    )
};

export default Main;
