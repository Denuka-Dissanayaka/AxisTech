import React, {useContext} from 'react';
import styled from "styled-components";
import CloseBtn from '../../assets/CloseBtn.png';
import { userContext } from './Card';

// ========== Style start ==========================

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
    gap: 5px;
    width: 386px;
    height: 448px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    display: none;

    ul {
        list-style: none;
        margin-top: 5px;
    }

    .close-btn {
        display: flex;
        flex-direction: row-reverse;
    }

    .close-btn img{
        cursor: pointer;
    }

    .title {
        width: 300px;
        font-weight: 700;
        font-size: 24px;
    }

    .radio-btn {
        
    }

    input[type="radio"]{
        display: none;
    }

    label{
        display: block;
        cursor: pointer;
        font-weight: 500;
        /* margin-bottom: 10px; */
    }

    label span{
        display: inline-flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 31px;
        transition: .25s ease;
        font-size: 20px;
        color: #ABADB5;

    }

    label span:hover,
    input[type="radio"]:checked + span{
        background-color: #d6d6e5;
    }

    label span:before{
        content: "";
        background-color: #fff;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
        transition: .25s ease;
        box-shadow:  inset 0 0 0 2px #00005c;
    }

    input[type="radio"]:checked + span:before{
        box-shadow: inset 0 0 0 10px #00005c;
    }


    .donate-btns {
      width: 100%;
      padding: 15px 20px;
      background-color: #F8C16F;
      color: #FFFFFF;
      border-radius: 10px;
      border: none;
      font-size: 15px;
      font-weight: 500;
      margin-top: 10px;
      cursor: pointer;
    }

    .donate-btns:hover {
      background-color: #edb055;
    }

    @media (max-width: 768px) {
      width: 300px;
      gap: 5px;
      height: auto;

      .close-btn img {
        width: 30px;
      }

      .title {
        width: 250px;
        font-weight: 700;
        font-size: 20px;
      }

      label span{
        font-size: 18px;
      }

      label span:before{
        content: "";
        background-color: #fff;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 10px;
        transition: .25s ease;
        box-shadow:  inset 0 0 0 2px #00005c;
      }

      input[type="radio"]:checked + span:before{
        box-shadow: inset 0 0 0 6px #00005c;
      }
    }

`

// ========== Style end ==========================




const CardDonate: React.FC = () => {
    
   
    const {display, changeDisplay, changeEndCardDisplay} = useContext(userContext);

    
  return (
    <CardContainer style={{display: display}}>
        <div className='close-btn' onClick={() => changeDisplay('none')}><img src={CloseBtn} alt="" /></div>
        <p className='title'>Select the amount that you want to donate</p>
        <ul className='donate-list'>
            <li className='donate-item'>
                <label>
                    <input type="radio" id="" name="radio" />
                    <span>$ 10</span>
                </label>
            </li>
            <li className='donate-item'>
                <label>
                    <input type="radio" id="" name="radio" />
                    <span>$ 50</span>
                </label>
            </li>
            <li className='donate-item'>
                <label>
                    <input type="radio" id="" name="radio" />
                    <span>$ 100</span>
                </label>
            </li>
            <li className='donate-item'>
                <label>
                    <input type="radio" id="" name="radio" />
                    <span>$ 500</span>
                </label>
            </li>
            <li className='donate-item'>
                <label>
                    <input type="radio" id="" name="radio" />
                    <span>$ 1000</span>
                </label>
            </li>
        </ul>
        <button className='donate-btns' onClick={() => {changeEndCardDisplay('block')}}>Pay Now</button>
    </CardContainer>
  )
}

export default CardDonate


