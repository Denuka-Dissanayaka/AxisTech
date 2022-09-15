import React, {useState, createContext} from 'react';
import styled from "styled-components"
import './App.css';


// =========== import components
import HeaderSection from './components/header/Header'
import BannerSection from './components/banner/Banner'
import ProjectsSection from './components/projectsContainer/ProjectsContainer'
import ProjectTitle from './components/projectTitle/ProjectTitle';
import Btn from './components/moreProjectsBtn/Btn';

// ======= styles start
const Cover = styled.div`
  position: absolute;
  height: 1800px;
  width: 100%;
  top:0px;
  bottom: 0px;
  left: 0px;
  background-color: black;
  display: none;
  z-index: -2;

  @media (max-width: 768px) {
      height: 2000px;
  }

  @media (max-width: 425px) {
      height: 3500px;
  }
`
// ======= styles end

interface themeObj {
  cardBgColor: string;
  cardTextColor: string;
  coverDisplay: string;
  boxShadow: string;
  
}

export const darkMode = createContext({theme:{cardBgColor:'',cardTextColor:'', coverDisplay:'', boxShadow:''}, setTheme:(theme:themeObj) => {}});
let onDarkTheme = false;

const App : React.FC = () => {
  
  const [darkTheme, setDarkTheme] = useState<themeObj>({cardBgColor:'',cardTextColor:'', coverDisplay:'', boxShadow:''})
  
  const setTheme = (theme:themeObj):void => {
    
    if(!onDarkTheme) {
      setDarkTheme(theme);
      onDarkTheme = true;
    } else {
      setDarkTheme({cardBgColor:'',cardTextColor:'', coverDisplay:'', boxShadow:''})
      onDarkTheme = false;
    }
    
  }


  return (
    <>
      <darkMode.Provider value={{theme:darkTheme, setTheme}}>
        <Cover style={{display:darkTheme.coverDisplay}}></Cover>
        <HeaderSection/>
        <BannerSection/>
        <ProjectTitle/>
        <ProjectsSection/>
        <Btn/>
      </darkMode.Provider>
    </>
  );
}

export default App;
