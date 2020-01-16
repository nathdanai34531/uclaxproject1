// React Library
import React from 'react';

// App Components Styles
import './App.scss';

// My Components
import Nav from './Nav/Nav.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
    return (
        <div className='wrapper'>
            <Nav />
            <Main />
            <Footer />
           
           
        </div>
    )
}

export default App;