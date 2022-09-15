import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 30px;

    button {
        padding: 15px 60px;
        background-color: #fff;
        box-shadow: 0px 19px 41px rgba(217, 217, 217, 0.5);
        border-radius: 10px;
        font-weight: 700;
        font-size: 18px;
        border: none;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        background-color: #edecec;
    }
`