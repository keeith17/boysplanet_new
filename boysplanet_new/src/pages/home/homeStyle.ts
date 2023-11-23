import styled from "@emotion/styled";

export const HomeWrap = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px 80px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 700px) {
        padding: 20px;
    }
`;

export const HomeImgBox = styled.div`
    width: 100%;
    margin: auto;
    img {
        width: 100%;
    }
`;

export const HomeGuide = styled.div`
    width: 100%;
    padding: 0 0 30px 0;
    text-align: center;
    p {
        padding: 2px 0;
        font-size: 18px;
    }
    @media all and (max-width: 700px) {
        padding: 0 0 20px 0;
        p {
            font-size: 16px;
        }
    }
`;

export const HomeButtons = styled.div`
    width: 100%;
    padding: 0 10% 17px 10%;
`;
