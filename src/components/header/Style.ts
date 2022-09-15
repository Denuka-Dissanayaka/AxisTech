import styled from "styled-components";

export const HeaderSection = styled.div`
    width: 1198px;
    margin: auto;
    margin-top: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    .toggle .toggle-btn-container {
      width: 69px;
      height: 40px;
      padding: 5px;
      background-color: rgba(33, 35, 38, 0.04);
      border-radius: 47px;
      margin-left: 15px;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      /* flex-direction: row; */
    }

    .toggle-btn {
      width: 27px;
      height: 27px;
      background: linear-gradient(180deg, #818BE9 0%, #AF93FF 100%);
      border-radius: 63px;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      width: 85%;
    }

    @media (max-width: 425px) {
      width: 90%;

      .logo {
        width: 180px;
      }

      .toggle img {
        width: 18px;
      }
    }
    
`
