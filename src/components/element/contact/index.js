import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './_contact.scss';




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cd20xmi', 'template_3bx0bzd', form.current, 'W9qSixd1krR1xHmFM')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='myForm' id='contact' >
            <div className='myForm myFormBox'>
                <label>Name</label>
                <input type="text" className='myFormBoxInput' name="user_name" />

                <label>Email</label>
                <input type="email" className='myFormBoxEmail' name="user_email" />
                <label>Message</label>
                <textarea name="message" className='myFormBoxMassage' />
                <input type="submit" value="Send" className='myFormBoxInputButton' />
            </div>
        </form>
    );
};

export default Contact;