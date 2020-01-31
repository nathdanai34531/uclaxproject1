import React from 'react';
import './Pages.scss';
import Tabbed from '../Tabbed/Tabbed.jsx.jsx';

const Home = () => {
    return (
        <div className={'Pages Home'}>
            {/* Home */}


            <div className="banner">
                <div>Banner image</div>
            </div>

            <div className="featured"> Featured Day Trip </div>

            <div className="featureddescript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab commodi hbjhkol reiciendis animi cumque quae, maxime Lorem ipsum dolor sit  adipisicing elit.  optio praesentium perspiciatis inventore blanditiis aliquam voluptate quisquam itaque commodi dolorum itaque commodi dolorum. 
            </div>

            <div className="columns">
                <div className="col col1">Tour 1 </div>
                <div className="col col2">Tour 2 </div>
                <div className="col col3">Tour 3 </div>
                <div className="col col4">Tour 4 </div>
            </div>

            <div className="columns2">
                <div className="col col1">Tour 1 </div>
                <div className="col col2">Tour 2 </div>
                <div className="col col3">Tour 3 </div>
                <div className="col col4">Tour 4 </div>
            </div>





            <br></br>

            <br></br>
            <br></br><br></br><br></br>


            <Tabbed />

            <br></br><br></br><br></br>
            <br></br>




            <div className="blogger">
                <div className="blogtopic"> Read Our Blog </div> <hr></hr>

                <div className="blog blog2">Blog 1 </div> 
                <div className="blog blog3">Blog 2 </div>
                <div className="blog blog1">Blog 3 </div>
                <br></br>

            </div>








        </div>
    );
}

export default Home;