import React from 'react';
import '../Pages.scss';
import './Contact.scss';


import Address from './Address/Address.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import GoogleMap from './GoogleMap/GoogleMap.jsx';

const Contact = () => {
    return (




        <div className={'Pages Contact'}>

            <div className="contacthead">
                Contact Us </div>

            <div className="contacttext">
            Submitting this form is the easiest way to contact us about any questions you may have. Your question will be directed to a team member who will best be able to answer your questions.           </div>

            <br /> <br></br> 

            <div className='row row1'>

                <div className="column column2">
                    <ContactForm />
                </div>

                <div className="column column1">
                    <Address />
                </div>


            </div>

            <br /><br /><br />

            <div className='row row2'>
                <GoogleMap />
            </div>
        </div>
    );
}

export default Contact;