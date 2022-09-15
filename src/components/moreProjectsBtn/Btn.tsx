import React, {useContext} from 'react';
import { darkMode } from '../../App';

//  ========   import styled elements
import {Container} from './Style';

const Btn = () => {
   // Dark theme
   const {theme} = useContext(darkMode);

  return (
    <Container>
      <button style={{color:theme.cardTextColor, backgroundColor: theme.cardBgColor, boxShadow:theme.boxShadow}}>More Projects</button>
    </Container>
  )
}

export default Btn
