import React, { useState, useEffect } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {


    //State
    const [showMenu, updateShowMenu] = useState(true);
    const [isSmall, updateIsSmall] = useState(true);

    //Function/Methods
    //Hamburger click
    const handhamclick = () => {
        console.log('Youhitham');

        let newShowMenu;

        if (showMenu === true) {
            newShowMenu = false;
        } else {
            newShowMenu = true;
        }


        updateShowMenu(newShowMenu);
    }


    //Checking for small view or medium/large.
    const handleIsSmall = () => {

        console.log('isSmall: ', isSmall);

        if (window.innerWidth > 599) {
            updateIsSmall(false);
            updateShowMenu(true)

        } else {
            updateIsSmall(true);
            updateShowMenu(false);
        }
    }

    //useEffect says only do this when our Nav mounts for first time. (don't add it infinitely)
    useEffect(() => {
        window.addEventListener('resize', handleIsSmall);

        return () => {
            window.removeEventListener('resize', handleIsSmall)
            handleIsSmall(); //fire off when page first loads.
        }
    }, []);

    return (
        <nav className='Nav'>


            {
                isSmall &&
                <div className="hamburger" onClick={handhamclick}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            }



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













