import React, {useRef, useState} from 'react';
import './Login.scss';
import { emailCheck } from '../../common/utilities.js';
import classnames from 'classnames';
import keycode from 'keycode';
import API from '../../common/API.js';

const Login = () => {
//State
const [emailIsValid, updateEmailIsValid] = useState(true);
const [formIsValid, updateFormIsValid] = useState(false);
const [errors, updateErrorsArray] = useState([]);

const emailRef = useRef();
const messageRef = useRef();

const handleFormSubmit = () => {
    console.log('You clicked me');

    let errorMessages = [];

    //Validate the user fill in the form.
    if (emailRef.current.value.length < 4) {
        errorMessages.push({
            message: 'Please enter your email address',
        })
    }

    if (!emailCheck(emailRef.current.value)) {
        errorMessages.push({
            message: 'Invalid email address',
        })
    }

    if (messageRef.current.value.length < 1) {
        errorMessages.push({
            message: 'Please enter your password',
        })
    }


    updateErrorsArray(errorMessages);


    //Keep track of errors - update the Dom with feedback if there's an error.
    if (errorMessages.length > 0) {
        updateFormIsValid(false);
    } else {
        updateFormIsValid(true);
        //If all is sucessful - we want to post the data.
        console.log('Posting the data');

        const postData = {
            email: emailRef.current.value,
            message: messageRef.current.value,
        }

        API.post('email/send', postData).then((result) => {
            console.log('Posting the data', result);
        });

    }
}

const validateEmail = () => {
    const emailValue = emailRef.current.value;
    console.log('Validating email', emailValue)

    if (emailValue.length > 3 && !emailCheck(emailValue)) {
        updateEmailIsValid(false);
    } else {
        updateEmailIsValid(true);
    }



}

const displayErrors = () => {
    return errors.map((error, idx) => {
        return (
            <li key={idx}>{error.message}</li>
        );
    });
}

// Handle keyboard events
const handleKeyDown = (event) => {
    switch (keycode(event)) {
        case 'space':
        case 'enter':
            handleFormSubmit();
            break;
        default:
            return true;
    }
}


// const theClassName = (formIsValid) ? 'Login form-valid' : 'Login form-invalid';

const theClassName = classnames({
    'Login': true,
    'form-valid': formIsValid,
    'form-invalid': !formIsValid,
});

return (
    <div className={theClassName}>

        {
            errors.length > 0 &&
            <div className="error-message">
                {/* Error message goes here. */}
            <ul>
                    {displayErrors()}
                </ul>
            </div>

        }

        <div className="form-group">

            <div className="left">
                <label htmlFor="email">Email</label>
            </div>
            <div className="right">
                <input
                    className={emailIsValid ? '' : 'invalid'}
                    ref={emailRef}
                    name="email"
                    id="email"
                    placeholder='email.somedomain.com'
                    onChange={validateEmail} />
            </div>
        </div>
        <div className="form-group">
            <div className="left">
                <label htmlFor="message">Password</label>
            </div>
            <div className="right">
                <input ref={messageRef} name="message" id="message" placeholder='.....' />
            </div>
        </div>
        <div className="form-group">
            <div className="left" />
            <div className="right">
                <button
                    tab-index={0}
                    onClick={handleFormSubmit}
                    onKeyDown={handleKeyDown}
                >Login</button>
            </div>
        </div>


    </div>

);
    }
        
export default Login;