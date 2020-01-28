import React, { useState } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);


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

    return (
        <nav className='Nav'>

            <div className="hamburger" onClick={handhamclick}>
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













