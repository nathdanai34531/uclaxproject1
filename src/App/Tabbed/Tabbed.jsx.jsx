import React, { useState } from 'react';
import './Tabbed.scss';


//Arrays
const tabItems = [
    {
  
        title: 'Gallery 1',
        text: 'First gallery',

    },

    {
 
        title: 'Gallery 2',
        text: 'Second gallery',

    },

    {

        title: 'Gallery 3',
        text: 'Third gallery',

    },

];



const Tabbed = () => {
    //stage managed
    const [currentTab, setCurrentTab] = useState(tabItems[1]);


    return (
        <div className={'Tabbed'}>

            <div className="tabs">


                <div onClick={ () => { setCurrentTab(tabItems[0]) } } className="tab">Gallery 1</div>
                <div onClick={ () => { setCurrentTab(tabItems[1]) } }className="tab">Gallery 2</div>
                <div onClick={ () => { setCurrentTab(tabItems[2]) } }className="tab">Gallery 3</div>
            </div>

            <div className="content">
                <img src={currentTab.image} />
                <h2>{currentTab.title}</h2>
                <p>{currentTab.text}</p>
            </div>
        </div>
    )

}

export default Tabbed;