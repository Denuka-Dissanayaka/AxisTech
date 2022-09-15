import React, {useContext} from 'react'
import styled from "styled-components";
import SuccessImg from '../../assets/Success.png';

import { userContext } from './Card';

// ============ styles start ================
const CardContainerEnd = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center;*/
    padding: 25px; 
    gap: 22px;
    width: 386px;
    height: 448px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 2;
    display: none;

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
    }

    .text {
        width: 100%;
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        color: #818BE9;
    }

    .end-btns {
      width: 100%;
      padding: 15px 20px;
      background-color: #818BE9;
      color: #FFFFFF;
      border-radius: 10px;
      border: none;
      font-size: 20px;
      font-weight: 500;
      margin-top: 15px;
      cursor: pointer;
      transition: 0.5s;
    }

    .end-btns:hover {
      background-color: #6f7be8;
    }

    @media (max-width: 768px) {
      width: 300px;
      gap: 20px;
      height: auto;

      .end-btns {
        font-size: 15px;
        
      }

      .text {
        font-size: 20px;
        color: #818BE9;
      }
    }
`
// ============ styles end ================

const EndCard = () => {
    const {endCardDisplay, doneFunc} = useContext(userContext);
  return (
    <CardContainerEnd style={{display: endCardDisplay}}>
      <div className='img-container'>
        <img src={SuccessImg} alt="" />
      </div>
      <p className='text'>You have successfully made the donation!</p>
      <button className='end-btns' onClick={() => {doneFunc('none')}}>Done</button>
    </CardContainerEnd>
  )
}

export default EndCard
