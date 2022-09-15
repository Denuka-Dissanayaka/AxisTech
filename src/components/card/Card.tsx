import React, {useState, createContext, useContext} from 'react';

import CardDonate from './CardDonate';
import EndCard from './EndCard';

//import dark theme
import { darkMode } from '../../App';


// ========== import styled elements
import {CardContainer} from './CardStyle';




interface Props {
    img : string;
    val : number;
    amount : number;
}

export const userContext = createContext({display:'', changeDisplay: (display:string) => {}, endCardDisplay:'', changeEndCardDisplay: (display:string) => {}, doneFunc: (display:string) => {}});

const Card: React.FC<Props> = ({img, val, amount}) => {
  const [display, setDisplay] = useState<string>('');
  const [endCardDisplay, setEndCardDisplay] = useState<string>('');
  
  // Dark theme
  const {theme} = useContext(darkMode)

  // card changing functions
  const changeDisplay = (display:string):void => { setDisplay(display)}
  const changeEndCardDisplay = (display:string):void => { setEndCardDisplay(display)}
  const doneFunc = (display:string):void => {
     setEndCardDisplay(display);
     setDisplay(display);
  }
  
  return (
    <CardContainer style={{backgroundColor: theme.cardBgColor}}>
      <userContext.Provider value={{display, changeDisplay, changeEndCardDisplay, endCardDisplay, doneFunc}}>
        <CardDonate/>
        <EndCard/>
      </userContext.Provider>  
      <div className='img-container'>
        <img src={img} alt="" />
      </div>
      <p className='card-text' style={{color: theme.cardTextColor}}>Build school Wellawaya Sri Lanka</p>
      <div className="range-container">
        <input className='range-bar' type="range" min="1" max="100" value={val}/>
      </div>
      <p className='amount' style={{color: theme.cardTextColor}}>$ {amount} <span className='amount-tag'>Raised</span></p>

      <button className='donate-btn' onClick={() => {setDisplay('block')}}>Donate Now</button>

    </CardContainer>
  )
}

export default Card
