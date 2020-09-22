import React from 'react';
import './Midd.css';
function Midd({
    lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  imgStart
}){
    return(
        <>
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
          <div className='col'>
            <div className='home__hero-text-wrap'>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
            </p>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Midd;