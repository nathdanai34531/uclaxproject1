import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';


import Home from '../Pages/Home.jsx';
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact.jsx';
import Tour from '../Pages/Tour/Tour.jsx';
import Blog from '../Pages/Blog.jsx';




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

                <Route path='/blog'>
                    <Blog />
                </Route>

                <Route path='/tour'>
                    <Tour />
                </Route>
                
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </main>

    )
};

export default Main;
