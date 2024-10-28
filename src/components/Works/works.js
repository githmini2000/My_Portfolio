import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio3 from '../../assets/portfolio-3.jpg';
import Portfolio4 from '../../assets/portfolio-4.jpg';
import Portfolio5 from '../../assets/portfolio-5.jpg';
import Portfolio6 from '../../assets/portfolio-6.jpg';

const Works = () => {
  return (
    <div>
      <section id='works'>
          <h2 className='worksTitle'>My Portfolio </h2>
          <span className='worksDesc'>A showcase of projects that highlight my skills in building efficient, responsive, and user-focused applications. Each project reflects my commitment to quality and innovative problem-solving.</span>
          <div className='worksImgs'>
              <img src={Portfolio1} alt='Portfolio1' className='worksImg'/>
              <img src={Portfolio2} alt='Portfolio2' className='worksImg'/>
              <img src={Portfolio3} alt='Portfolio3' className='worksImg'/>
              <img src={Portfolio4} alt='Portfolio4' className='worksImg'/>
              <img src={Portfolio5} alt='Portfolio5' className='worksImg'/>
              <img src={Portfolio6} alt='Portfolio6' className='worksImg'/>
          </div>
          <button className='worksBtn'>See More</button>
      </section>
    </div>
  )
}

export default Works;
