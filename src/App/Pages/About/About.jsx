import React from 'react';
import '../Pages.scss';
import Staff from './Staff/Staff.jsx';



const About = () => {
    return (
        <div className={'Pages About'}>




<div className='contacthead'>
    About Us
</div>





            <br></br>

            <div className="contacttext">
            Co-founders Kevin and Raman are global travelers who travel the backpacker’s way. From Europe and South America to India and Africa – they’ve trekked around the world and know the needs of budget travelers and how to make things fun. <br></br><br></br>They understand that although the beaten path is beaten for a reason, it’s nice to step out of bounds to see another side of a new place. A Day In LA Tours wants to give you a piece of both.

We know many visitors are in town for only a few days, so we want to make the most of your time.  </div>

            <div className="contactform">
                {/* <div className="cont cont1">About</div> */}
            </div>

            <br /> 

            <Staff />







        </div>

    );
}

export default About;