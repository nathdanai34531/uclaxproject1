import React from 'react';
import './Main.scss';

const Main = () => {
    return (
        <main className='Main'>


            <div className="banner">
                <div>Banner image</div>
            </div>

            <div className="featured"> Featured Day Trip </div> <hr></hr>

            <div className="columns">
                <div className="col col1">Tour 1 </div>
                <div className="col col2">Tour 2 </div>
                <div className="col col3">Tour 3 </div>
                <div className="col col4">Tour 4 </div>
            </div>

            <div className="columns2">
                <div className="col col1">Description </div>
                <div className="col col2">Description </div>
                <div className="col col3">Description </div>
                <div className="col col4">Description </div>
            </div>


            <br></br><br></br>
            <hr></hr>
 

            <div className="blogger">
                <div className="blogtopic"> Blog </div>

                <div className="blog blog2">Blog 1 </div> 
                <div className="blog blog3">Blog 2 </div>
                <div className="blog blog1">Blog 3 </div>
                <br></br>
                <hr></hr>
            </div>













        </main>

    )
};

export default Main;
