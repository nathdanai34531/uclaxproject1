import React, { useState, useEffect } from 'react';
import './Tour.scss';
import { tourLists } from './tour.js';




const TourLists = () => {

   


    return tourLists.map((tourLists, idx) => {
        return (
            <div key={idx} className={'TourList'}>
                <img src={tourLists.img} alt={tourLists.name} />
                <h3>{tourLists.name}</h3>
            </div>
        );
    });

}

const Tour = () => {
    return (
        <div className='Tour'>
            <h3 className='ourtours'>Our Tours</h3>

            <div className="tourdescript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab commodi hbjhkol reiciendis animi cumque quae, maxime manna te dolor sit  adipisicing elit.  optio praesentium perspiciatis inventore blanditiis aliquam voluptate quisquam itaque commodi dolorum itaque commodi dolorum.
            </div>

            <br/>

            <TourLists />
        </div>
    )
}




export default Tour;