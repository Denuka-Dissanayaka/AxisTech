import React from 'react';

import BannerImg from '../../assets/banner.png';

// ============== import styled element
import { BannerSection } from './Style';

const Banner = () => {
  return (
    <BannerSection>
      <div className='image-container'>
        <img src={BannerImg} alt="" />
      </div>
      <div className='text-container'>
        <h1 className='banner-title'>We want give them a better tommorow!</h1>
        <p className='banner-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <button className='banner-btn'>Get Started</button>
      </div>
    </BannerSection>
  )
}

export default Banner
