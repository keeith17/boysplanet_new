import styled from "@emotion/styled";

export const ResultStyle = styled.div`
    padding-top: 30px;
    width: 100%;
    padding: 70px 11.111111% 40px 11.111111%;
    @media all and (max-width: 700px) {
        padding: 70px 8% 40px 8%;
    }
`;

export const ResultTitleStyle = styled.div`
    width: 100%;
    p {
        text-align: center;
        padding: 5px 0;
        font-size: 25px;
    }
    @media all and (max-width: 700px) {
        p {
            font-size: 20px;
        }
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
    @media all and (max-width: 700px) {
        .times {
            font-size: 14px;
        }
        .filter-box {
            select {
                width: 70%;
                height: 40px;
                font-size: 13px;
            }
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
                    &.rank {
                        width: 15%;
                    }
                    &.rankKName {
                        font-weight: 700;
                        font-size: 20px;
                    }
                    &.rankEName {
                        width: 35%;
                    }
                }
            }
            &.korea {
                .rankKName {
                    color: #3395fe;
                }
            }
            &.global {
                .rankKName {
                    color: #d74696;
                }
            }
            &.topNine {
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
                        &.rank {
                            font-size: 25px;
                        }
                        &.rankKName {
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
    @media all and (max-width: 700px) {
        width: 100%;
        padding: 10px 0;
        .boys-ranking {
            li {
                padding: 3px;
                .content-wrap {
                    width: 100%;
                    padding: 0;
                    border-radius: 5px;
                    p {
                        padding: 10px 0;
                        font-size: 11px;
                        width: 25%;
                        text-align: center;
                        &.rankKName {
                            font-size: 16px;
                        }
                    }
                }
                &.topNine {
                    .content-wrap {
                        padding: 2px;
                        border-radius: 10px;
                        p {
                            display: block;
                            width: 100%;
                            text-align: center;
                            padding: 7px 0;
                            font-size: 10px;
                            font-weight: 500;
                            &.rank {
                                font-size: 18px;
                            }
                            &.rankKName {
                                padding: 0;
                                font-size: 19px;
                                font-weight: 700;
                                color: white;
                            }
                            &.rankEName {
                                font-size: 11px;
                                padding-bottom: 0;
                            }
                            &.howMany {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
`;
