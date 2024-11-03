import React from 'react'
import './contact.css';
import GitHub from '../../assets/gitHub.png';
import slack from '../../assets/slack.png';
import Microsoft from '../../assets/microSoft.png';
import Coursera from '../../assets/coursera.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';

const Contact = () => {
  return (
    <section className='contactPage'>
        <div className='clients'>
           <h1 className='contactPageTitle'>My Clients</h1>
           <p className='clientDesc'>I’ve had the pleasure of working with clients from different industries, helping them bring their ideas to life through reliable and tailored software solutions.</p>
           <div className='clientImgs'>
              <img src={GitHub} alt='Client' className='clientImg'/>
              <img src={slack} alt='Client' className='clientImg'/>
              <img src={Microsoft} alt='Client' className='clientImg'/>
              <img src={Coursera} alt='Client' className='clientImg'/>
           </div>
        </div>
          
        <div id='contact'>
           <h1 className='contactPageTitle'>Contact Me</h1>
           <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
           <form className='contactForm'>
               <input type="text" className='name' placeholder="your Name"/>
               <input type="email" className='email' placeholder="your Email"/>
               <textarea className="msg" name='message' rows= '5' placeholder="your Message"></textarea>
               <button type="submit" value='Send' className="submitBtn">Submit</button>
               <div className='links'>
                      <img src={facebook} alt="Facebook" className='link'/>
                      <img src={instagram} alt="Instagram" className='link'/>
                      <img src={linkedin}  alt="LinkedIn" className='link'/>
                      <img src={youtube}  alt="Youtube" className='link'/>



               </div>



           </form>
        </div>






    </section>
  )
}

export default Contact;
