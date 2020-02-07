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
            Let's Talk! </div>

        <div className="contacttext">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>


        <div className="contactform">
            <div className="cont cont1">Contact Form</div>
        </div>

<br/><br/><br/>

            <div className='row row1'>
                <div className="column column1">
                    <Address />
                </div>

                <div className="column column2">
                    <ContactForm />
                </div>
            </div> 

            <div className='row row2'>
                <GoogleMap />
            </div>
        </div>
    );
}

export default Contact;