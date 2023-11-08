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
`;

export const ModalContainer = styled.div`
    width: 560px;
    height: 420px;
    margin: auto;
    padding: 80px;
    background: $maincolor;
    border-radius: 10px;
    border: 3px solid rgb(255, 255, 255, 0.5);
`;

export const ModalLi = styled.li`
    width: 100%;
    padding: 50px 0;
`;

export const ModalH2 = styled.h2`
    text-align: center;
    font-size: 35px;
`;

export const ModalButtonBox = styled.div`
    width: 100%;
    display: flex;
    flex-flow: wrap;
`;

export const ModalLink = styled(Link)`
    width: 90%;
    text-align: center;
    background: $buttoncolor;
    margin: 10px auto;
    padding: 15px 0;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.3s;
`;
