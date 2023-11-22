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

export const RankingStyle = styled.div`
    width: 100%;
    padding: 20px 0;
    .boys-ranking {
        width: 100%;
        display: flex;
        flex-flow: wrap;
        li {
            width: 100%;
            padding: 5px;
            .content-wrap {
                width: 100%;
                padding: 5px;
                background: #322d59;
                border-radius: 5px;
                p {
                    display: inline-block;
                    padding: 10px;
                    font-weight: 500;
                    font-size: 18px;
                    width: 25%;
                    text-align: center;
                    &:nth-child(1) {
                        width: 15%;
                    }
                    &:nth-child(2) {
                        font-weight: 700;
                        font-size: 20px;
                    }
                    &:nth-child(3) {
                        width: 35%;
                    }
                }
            }
            &.korea {
                p {
                    &:nth-child(2) {
                        color: #3395fe;
                    }
                }
            }
            &.global {
                p {
                    &:nth-child(2) {
                        color: #d74696;
                    }
                }
            }
            @for $i from 1 through 9 {
                &:nth-child(#{$i}) {
                    width: 33.333%;
                    .content-wrap {
                        width: 100%;
                        padding: 15px 0;
                        border-radius: 10px;
                        p {
                            display: block;
                            width: 100%;
                            text-align: center;
                            padding: 10px 0;
                            font-size: 18px;
                            font-weight: 500;
                            &:nth-child(1) {
                                font-size: 25px;
                            }
                            &:nth-child(2) {
                                padding: 0;
                                font-size: 30px;
                                font-weight: 700;
                                color: white;
                            }
                        }
                    }
                    &.korea {
                        .content-wrap {
                            background: #3395fe;
                        }
                    }
                    &.global {
                        .content-wrap {
                            background: #d74696;
                        }
                    }
                }
            }
        }
    }
`;
