import React from 'react';
import './skills.css';
import WebApp from '../../assets/WebApp.png';
import API from '../../assets/API.png';
import DB from '../../assets/DB.png';


const Skills = () => {
  return (
    <section id ="skills">
    <span className='skillTitle'>What I Do</span>
    <span class name ='skillDesc'>I build responsive and user-friendly web applications, ensuring seamless functionality and an optimized user experience through modern web technologies.</span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img scr={WebApp} alt='WebApp' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Web Applications</h2>
                <p>Develop and maintain websites with front-end and back-end functionality.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img scr={API} alt='API' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>API Development</h2>
                <p> Design APIs that connect different apps and services seamlessly.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img scr={DB} alt='DB' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Database Management</h2>
                <p>Design and manage databases, ensuring data is efficiently stored, retrieved, and secured across applications.</p>
            </div>
        </div>
           
    </div>  

    </section>
  )
}

export default Skills;
