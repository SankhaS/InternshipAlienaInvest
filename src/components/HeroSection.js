import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import {GiUsaFlag } from 'react-icons/gi';
import {MdEmail} from 'react-icons/md'

function HeroSection({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  descriptionleft,
  img,
  alt,
  imgStart,
  alt1,
  img1,
  img2,
}) {

  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
          <div className='col'>
            <div className='home__hero-text-wrapper'>
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
                <div className='input-areas'>
                  <form>
                    <MdEmail className='navbar-icon'/>
                    <input
                      className='footer-input'
                      name='email'
                      type='email'
                      placeholder='Your Email'
                    />
                    <Button buttonStyle='btn--outline'>Join Now</Button>
                    <div
                      className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                        <GiUsaFlag className='navbar-icon'/>
                      {descriptionleft}
                    </div>
                    <div className='col'>
                      <div className='home__hero-img-wrapper'>
                        <img src={img1} alt={alt1} className='home__hero-img' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>

            <div/>
          </div>
        </div>
      </div>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col1'>
              <div className='home__hero-img-wrapper'>
                <img src={img2} alt={alt1} className='home__hero-img1' />
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;