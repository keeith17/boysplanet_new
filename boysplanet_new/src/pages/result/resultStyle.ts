import styled from "@emotion/styled";

export const ResultStyle = styled.div`
    padding-top: 30px;
    width: 100%;
    padding: 70px 11.111111% 40px 11.111111%;
`;

export const ResultTitleStyle = styled.div`
    width: 100%;
    p {
        text-align: center;
        padding: 5px 0;
        font-size: 25px;
    }
`;

export const ResultContentsStyle = styled.div`
    width: 100%;
    padding: 20px 0;
`;

export const ResultInfoStyle = styled.div`
    width: 100%;
    display: flex;
    .times {
        width: 50%;
        font-size: 20px;
        line-height: 40px;
    }
    .filter-box {
        display: flex;
        width: 50%;
        align-items: right;
        justify-content: right;
        select {
            width: 40%;
            height: 40px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            outline: none;
            background: #fff;
            color: $buttoncolor;
            font-weight: 700;
            font-size: 17px;
        }
    }
`;
