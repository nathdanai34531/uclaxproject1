import React from 'react';
import '../Pages.scss';
import Tabbed from './Tabbed/Tabbed.jsx';
import Slideshow from './Slideshow/Slideshow';
import Services from '../Services/Services.jsx';
import Contact from '../Contact/Contact.jsx';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRoute } from '@fortawesome/free-solid-svg-icons';
// import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
// import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className={'Pages Home'}>
<div className='slidesinhome'>
            <Slideshow />
            </div>

            <br></br> <br></br><br></br><br></br><br></br>

            <div className="featured"> A Day In LA Tours </div>


            <div className="featureddescript">
                Are you planning to visit LA, or did you just arrive in town? Are you an LA native who has simply never had the time to see the city’s many sights? Whether you’re a tourist or a resident, our Los Angeles tour company will give you the chance to experience the City of Angels like never before.    </div>
            <br></br>    <br></br>
            <br></br> <br></br><br></br><br></br><br></br>
            <div className='toursinhome'>
            <Services />
            </div>



            {/* <div className="columns">
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
 */}


<br></br><br></br>

            <div className="aboutandmission">
                About and Mission</div>

            <div className="aboutandmissiondescript">
                We are small, independent, and specialize in one full day tour of LA. We are here for those travelers who like to do things on their own. Unfortunately, LA is not built for easy viewing during short-term stays. We put all of our energy and effort in making this one tour meet the demands of all aboard.  </div>




            <br></br><br></br>


            <Tabbed />


      
            

{/* 
            <div className="Reasons">
                Reasons To Discover L.A. With Us. </div>


            <div className="Reasonstext">
We know you are on a budget so we are not going to charge you anywhere near the other tours – who often charge over $125 for a day – we are the best value and best day tour in all of Los Angeles – guaranteed! </div> */}
{/* 
          
            <div className="aboutandmission">
                Must Do In L.A.</div>

            <div className="blogging">
                <div className="bol bol1">Blog 1 </div>
                <div className="bol bol2">Blog 2 </div>
                <div className="bol bol3">Blog 3 </div>
                <div className="bol bol4">Blog 4 </div>
                <div className="bol bol5">Blog 5 </div>
                <div className="bol bol6">Blog 6 </div>
            </div> */}

            <br></br><br></br>     <br></br><br></br>

            {/* 
            <nav className='routeicon'>
                <FontAwesomeIcon icon={faRoute} />
            </nav>

            <nav className='timeicon'>
                <FontAwesomeIcon icon={faHourglassHalf} />
            </nav>

            <nav className='moneyicon'>
                <FontAwesomeIcon icon={faMoneyBillWave} />
            </nav> */}


            <br></br><br></br>
      
                <Contact />
            
            {/* 
          

            <div className="contacttext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 </div>

            <div className="contactform">
                <div className="cont cont1">Contact Form</div>
            </div>

            <br></br><br></br>     <br></br><br></br>
 */}







        </div>
    );
}

export default Home;