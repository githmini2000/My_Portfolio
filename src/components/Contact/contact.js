import React from 'react'
import './contact.css';
import GitHub from '../../assets/gitHub.png';
import slack from '../../assets/slack.png';
import Microsoft from '../../assets/microSoft.png';
import Coursera from '../../assets/coursera.png';



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

          <div className='contact'>


          </div>






    </section>
  )
}

export default Contact;
