import React from 'react';
import './intro.css';
import {Link} from "react-scroll";
import image from '../../assets/image.jpg'
import btnImg from '../../assets/btnImg.png'
function Intro() {
  return (
   <section id ="intro">
     <div className = "introContent">
         <span className='hello'>Hello</span>
         <span className='introText'>I'm <span className='introName'>Githmini</span><br/>Software Developer</span>
         <p className='introPara'>I am a dedicated developer with a focus on creating efficient, user-friendly solutions to real-world challenges."</p>
         <Link><button className='btn'><img src={btnImg} alt="Hire Me"/>Hire Me</button></Link>
     </div>
     <img src={image} alt="profile" className="image"/>

   </section>
  )
}

export default Intro;
