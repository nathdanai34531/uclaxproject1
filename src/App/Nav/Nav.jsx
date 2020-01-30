import React, { useState, useEffect } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    const [showMenu, updateShowMenu] = useState(false);

    //Click Event
    const handleHamburgerClick = () => {

        if (showMenu === false) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }

    }

    //Window Resize Event
    const handleWindowResize = () => {
        if (window.innerWidth > 599) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }

    //When component first mounts
    useEffect(() => {
        window.addEventListener('resize', handleHamburgerClick);
        handleWindowResize(); 
    }, []);



    return (
        <nav className='Nav'>
            <div className="hamburger" onClick={handleHamburgerClick}>


                <FontAwesomeIcon icon={faBars} />
            </div>

            {
                showMenu &&
                <div className="links">

                    <a href="#">About</a>
                    <a href="#">Tours</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
            }


        </nav>
    )


};

export default Nav;













