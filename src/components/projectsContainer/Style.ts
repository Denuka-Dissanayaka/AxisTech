import styled from "styled-components"

export const ProjectsSection = styled.div`
    width: 1198px;
    margin: auto;
    margin-top: 34px;
    display: grid;
    gap: 17px;
    grid-template-columns: auto auto auto;

    @media (max-width: 768px) {
      width: 85%;
      grid-template-columns: auto auto;
    }

    @media (max-width: 425px) {
      width: 90%;
      grid-template-columns: auto;
      justify-content: center;
    }
    
`