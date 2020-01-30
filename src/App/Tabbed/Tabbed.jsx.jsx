import React, { useState } from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        title: 'Gallery1',
        text: 'The first gallery',
    },

    {
        title: 'Gallery2',
        text: 'The second gallery',
    },

    {
        title: 'Gallery3',
        text: 'The third gallery',
    },

];

const Tabbed = () => {
    //Stage managed
    const [currentTab, setCurrentTab] = useState(tabItems[0]);


    return (
        <div className={'Tabbed'}>
            
            <div className="tabs">
                <div onCLick={ () => { setCurrentTab (tabItems[0] )} } className="tab">Gallery 1</div>
                <div onCLick={ () => { setCurrentTab (tabItems[1] )} } className="tab">Gallery 2</div>
                <div onCLick={ () => { setCurrentTab (tabItems[2] )} } className="tab">Gallery 3</div>
            </div>


            <div className="content">
            
                <h2>{currentTab.title}</h2>
                <p>{currentTab.text}</p>

            </div>

        </div>


    )

}

export default Tabbed;

