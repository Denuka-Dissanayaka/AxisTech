import React, {useContext}from 'react'

// ============== import images
import logo from '../../assets/Logo.png';
import sun from '../../assets/sun.png'

import { darkMode } from '../../App';

// ============== import styled element
import { HeaderSection } from './Style';


const Header = () => {
  const {setTheme, theme} = useContext(darkMode);
  return (
    <HeaderSection>
      <img src={logo} alt="" className='logo' />
      <div className='toggle'>
        <img src={sun} alt="" />
        <div className='toggle-btn-container'  style={{backgroundColor:theme.cardBgColor}}>
          <div className='toggle-btn' onClick={() => {setTheme({cardBgColor:'#2A2D39', cardTextColor:'#C6C7CD', coverDisplay:'block', boxShadow:'none'})}}></div>
        </div>
      </div>
    </HeaderSection>
  )
}

export default Header
