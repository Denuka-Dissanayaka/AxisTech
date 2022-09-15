import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
    gap: 5px;
    width: 386px;
    height: 448px;
    background: #FFFFFF;
    box-shadow: 0px 2px 48px rgba(23, 23, 23, 0.1);
    border-radius: 10px;
    position: relative;

    .img-container {
        width: 336px;
        height: 174px;
        border-radius: 10px;
    }

    .card-text {
        width: 336px;
        margin-top: 17px;
        font-weight: 700;
        font-size: 24px;
    }

    .range-container {
      width: 336px;
    }

    .range-bar {
      width: 100%;
      background-color: red;
    }

    .amount {
      font-weight: 900;
      font-size: 24px;
    }

    .amount-tag {
      font-size: 15px;
      font-weight: 400;
      color: #c9c8c8;
    }

    .donate-btn {
      width: 100%;
      padding: 15px 20px;
      background-color: #818BE9;
      color: #FFFFFF;
      border-radius: 10px;
      border: none;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }

    .donate-btn:hover {
      background-color: #6c78e2;
    }
    

    @media (max-width: 768px) {
      width: 300px;
      gap: 10px;
      height: auto;

      .img-container {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }

      .img-container img {
        width: 100%;
      }

      .card-text {
        width: 100%;
        margin-top: 10px;
        font-weight: 700;
        font-size: 20px;
      }

      .range-container {
        width: 100%;
      }
    }
`