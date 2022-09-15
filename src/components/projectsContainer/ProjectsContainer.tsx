import React from 'react';

import Card from '../card/Card';

// ============== card images
import img1 from '../../assets/cardImages/Frame1.png'; 
import img2 from '../../assets/cardImages/Frame2.png'; 
import img3 from '../../assets/cardImages/Frame3.png'; 

// ============== import styled elements
import { ProjectsSection } from './Style';


const ProjectsContainer = () => {
  return (
    <ProjectsSection>
      <Card img={img1} val={20} amount={2000}/>
      <Card img={img2} val={20} amount={2000}/>
      <Card img={img3} val={50} amount={5000}/>
      <Card img={img1} val={30} amount={3000}/>
      <Card img={img2} val={70} amount={7000}/>
      <Card img={img3} val={90} amount={9000}/>
    </ProjectsSection>
  )
}

export default ProjectsContainer
