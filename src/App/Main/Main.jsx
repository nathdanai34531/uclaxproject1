import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';


import Home from '../Pages/Home/Home.jsx';
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Services from '../Pages/Services/Services.jsx';
import Blog from '../Pages/Blog.jsx';
import Login from '../Pages/Login/Login.jsx';




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

                <Route path='/services'>
                    <Services />
                </Route>

                <Route path='/login'>
                    <Login />
                </Route>
                
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </main>

    )
};

export default Main;
