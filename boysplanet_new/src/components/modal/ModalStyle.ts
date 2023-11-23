import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ModalWrap = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    z-index: 2;
`;

export const ModalContainer = styled.div`
    width: 560px;
    height: 420px;
    margin: auto;
    padding: 80px;
    background: #120a30;
    border-radius: 10px;
    border: 3px solid rgb(255, 255, 255, 0.5);
    @media all and (max-width: 700px) {
        width: 85vw;
        height: 300px;
        padding: 30px 25px;
    }
`;

export const ModalLi = styled.li`
    width: 100%;
    padding: 50px 0;
    @media all and (max-width: 700px) {
        padding: 35px 0;
    }
`;

export const ModalH2 = styled.h2`
    text-align: center;
    font-size: 35px;
    @media all and (max-width: 700px) {
        font-size: 24px;
    }
`;

export const ModalButtonBox = styled.div`
    width: 100%;
    display: flex;
    flex-flow: wrap;
`;

export const ModalLink = styled(Link)`
    width: 90%;
    text-align: center;
    background: #322d59;
    margin: 10px auto;
    padding: 15px 0;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.3s;
`;
