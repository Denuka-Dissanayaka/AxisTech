import React, {useContext} from 'react';
import { darkMode } from '../../App';

import icon from '../../assets/projecticon.png';

// ============ import styled elements
import {Container} from './Style';

const ProjectTitle = () => {
  // Dark theme
  const {theme} = useContext(darkMode);

  return (
    <Container>
      <img src={icon} alt="" />
      <span style={{color:theme.cardTextColor}}>Projects</span>
    </Container>
  )
}

export default ProjectTitle
