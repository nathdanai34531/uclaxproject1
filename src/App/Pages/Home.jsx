import React from 'react';
import './Pages.scss';
import Tabbed from '../Tabbed/Tabbed.jsx.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className={'Pages Home'}>
            {/* Home */}


            <div className="banner">
                <div>Banner image</div>
            </div>

            <div className="featured"> Featured Day Trip </div>

            <div className="featureddescript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab commodi hbjhkol reiciendis animi cumque quae, maxime manna te dolor sit  adipisicing elit.  optio praesentium perspiciatis inventore blanditiis aliquam voluptate quisquam itaque commodi dolorum itaque commodi dolorum.
            </div>

            <div className="columns">
                <div className="col col1">Tour 1 </div>
                <div className="col col2">Tour 2 </div>
                <div className="col col3">Tour 3 </div>
                <div className="col col4">Tour 4 </div>
            </div>



            <div className="columns2">
                <div className="col col1">Tour 5 </div>
                <div className="col col2">Tour 6 </div>
                <div className="col col3">Tour 7 </div>
                <div className="col col4">Tour 8 </div>
            </div>






            <div className="aboutandmission">
                About and Mission</div>

            <div className="aboutandmissiondescript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab commodi holkol reiciendis animi cumque quae, maxime manna te dolor sit  adipisicing elit.  optio praesentium perspiciatis inventore blanditiis aliquam voluptate quisquam.
            </div>




            <br></br><br></br>


            <Tabbed />

          
            <br></br> <br></br><br></br><br></br><br></br>


            <div className="Reasons">
                Reasons To Discover L.A. With Us. </div>


            <div className="Reasonstext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab commodi holkol reiciendis animi cumque quae, maxime manna te dolor sit  adipisicing elit.  optio praesentium perspiciatis inventore blanditiis aliquam voluptate quisquam itaque commodi dolorum itaque commodi dolorum.
 </div>

            <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
            <br></br><br></br> <br></br><br></br>  <br></br><br></br>    <br></br><br></br><br></br><br></br>     <br></br><br></br>

            <div className="aboutandmission">
                Must Do In L.A.</div>

            <div className="blogging">
                <div className="bol bol1">Blog 1 </div>
                <div className="bol bol2">Blog 2 </div>
                <div className="bol bol3">Blog 3 </div>
                <div className="bol bol4">Blog 4 </div>
                <div className="bol bol5">Blog 5 </div>
                <div className="bol bol6">Blog 6 </div>
            </div>

            <br></br><br></br>     <br></br><br></br>


            <nav className='routeicon'>
                <FontAwesomeIcon icon={faRoute} />
            </nav>

            <nav className='timeicon'>
                <FontAwesomeIcon icon={faHourglassHalf} />
            </nav>

            <nav className='moneyicon'>
                <FontAwesomeIcon icon={faMoneyBillWave} />
            </nav>


            <br></br><br></br>

            <div className="contacthead">
                Let's Talk! </div>

            <div className="contacttext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 </div>

            <div className="contactform">
                <div className="cont cont1">Contact Form</div>
            </div>

            <br></br><br></br>     <br></br><br></br>








        </div>
    );
}

export default Home;