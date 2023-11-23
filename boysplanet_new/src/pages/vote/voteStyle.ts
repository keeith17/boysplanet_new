import styled from "@emotion/styled";

export const VoteStyle = styled.div`
    padding-top: 30px;
`;

export const PickStyle = styled.div`
    width: 100%;
    padding: 40px 11.1111%;
    .title {
        width: 100%;
        p {
            text-align: center;
            padding: 5px 0;
            font-size: 25px;
        }
    }
    .select {
        width: 100%;
        .search {
            padding: 15px 5px;
            input {
                appearance: none;
                width: 100%;
                background: #322d59;
                color: #fff;
                outline: none;
                border: none;
                padding: 10px;
                border-radius: 5px;
                &::placeholder {
                    color: #fff;
                }
                // &::-webkit-search-cancel-button {
                //     background: white;
                // }
            }
        }
    }
    @media all and (max-width: 700px) {
        padding: 30px 8%;
        .title {
            p {
                font-size: 18px;
                padding: 0;
            }
        }
    }
`;
export const CountStyle = styled.div`
    width: 100%;
    padding: 15px 0 5px 0;
    display: flex;
    .counting-wrap {
        height: 15px;
        margin: 0 auto;
        display: flex;
        .kok {
            width: 15px;
            height: 15px;
            background: #fff;
            border-radius: 10px;
            margin: 0 3px;
        }
    }
    @media all and (max-width: 700px) {
        .counting-wrap {
            .kok {
                width: 12px;
                height: 12px;
            }
        }
    }
`;

export const BoysListStyle = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: wrap;
`;

export const ListCheckStyle = styled.div`
    width: 100%;
    padding: 0 11.1111%;
    p {
        font-size: 20px;
        padding: 15px 0;
        line-height: 25px;
    }
    @media all and (max-width: 700px) {
        padding: 0 8%;
    }
`;

export const SubmitStyle = styled.div`
    width: 100%;
    padding: 20px 11.1111% 11.1111% 11.1111%;
    display: flex;
    button {
        padding: 20px 90px;
        background: #fff;
        font-size: 20px;
        margin: 0 auto;
        background: #322d59;
        border-radius: 5px;
        color: #fff;
        transition: all 0.3s;
        &:disabled {
            background: #1b1546;
            color: #1b1546;
            &:hover {
                background: #1b1546;
            }
        }
        &:hover {
            background: #6561897c;
        }
    }
    @media all and (max-width: 700px) {
        padding: 20px 8% 8% 8%;
    }
`;

export const CheckNameStyle = styled.span`
    padding-right: 10px;
`;
