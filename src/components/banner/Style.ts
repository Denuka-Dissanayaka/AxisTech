import styled from "styled-components";

export const BannerSection = styled.div`
    width: 1198px;
    margin: auto;
    margin-top: 34px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(144.41deg, #818BE9 47.54%, #E47FDA 91.07%);
    border-radius: 20px;
    padding: 68px;
    
    

    .text-container .banner-title {
        color: #fff;
        font-size: 48px;
    }

    .text-container .banner-text {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        margin-top: 19px;
    }

    .text-container .banner-btn {
        color: #000;
        padding: 15px 60px;
        background-color: #fff;
        border-radius: 10px;
        border: none;
        margin-top: 19px;
        font-size: 18px;
        font-weight: 700;
    }

    .image-container {
        margin-right: 60px;
    }
    
    @media (max-width: 768px) {
      width: 90%;
      padding: 30px;

      .text-container .banner-title {
        color: #fff;
        font-size: 28px;
      }

      .text-container .banner-text {
        font-size: 12px;
        margin-top: 15px;
      }

      .image-container {
        margin-right: 30px;
      }

      .image-container img {
        width: 250px;
      }

      .text-container .banner-btn {
        padding: 12px 30px;
        font-size: 15px;
        font-weight: 700;
      }
    }

    @media (max-width: 425px) {
      width: 90%;
      padding: 30px;
      flex-direction: column;

      .text-container .banner-title {
        color: #fff;
        font-size: 23px;
      }

      .text-container .banner-text {
        font-size: 12px;
        margin-top: 15px;
      }

      .image-container {
        margin-right: 0px;
        margin-bottom: 10px;
      }

      .image-container img {
        width: 250px;
      }

      .text-container .banner-btn {
        padding: 12px 30px;
        font-size: 15px;
        font-weight: 700;
      }
    }
    
`