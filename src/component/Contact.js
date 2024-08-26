import React from 'react'
import {useRef} from 'react'
import './Contact.css'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instragram from '../assets/instagram.svg'
import Fecebook from '../assets/facebook.svg'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_otk9o6u', 'template_rmgx33h', form.current, {
        publicKey: 'pP87BnEPISkplzL7M',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>

      <div id='social'>
        <h1 className='socialTitle'>Socials</h1>
         <p className='socialDesc'>Here you can contact me on my social media</p>

        <div className='socialImgs'>
           <a href='https://www.linkedin.com/feed/' target='blank'><img src={Linkedin} alt='LinkedIn' className='socialImg'/></a>
           <a href='https://github.com/' target='biank'><img src={Github} alt='GitHub' className='socialImg'/></a>
           <a href='#'><img src={Instragram} alt='Instagram' className='socialImg'/></a>
           <a href='#'><img src={Fecebook} alt='Facebook' className='socialImg'/></a>
        </div>
      </div>


        <div id='contactPage'>
          <h1 className='contactTitle'>Contact</h1>
          <span className='contactDesc'>Feel free to contact me</span>

          <from className='contactFrom' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your name" name="from_name" required/>
            <input type="email" className="email" placeholder="Your email" name="your_email" required/>
            <textarea className='msg' rows="5" placeholder=" Your Massage" name="message" required></textarea>
            <button type="submit" value="Send" className="submitBtn" onClick={() =>{alert("Your form is submit")}}>Submit</button>
          </from>
        </div>

    </section>
  )
}

export default Contact
