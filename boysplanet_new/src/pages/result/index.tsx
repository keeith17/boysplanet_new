import axios from "axios";
import {
    RankingStyle,
    ResultContentsStyle,
    ResultInfoStyle,
    ResultStyle,
    ResultTitleStyle,
} from "./resultStyle";
import { useQuery } from "react-query";
import { BoysListProps } from "../vote";
import { useState } from "react";

export interface BoysVoteProps {
    boysNum: number;
    boysKVote: number;
    boysGVote: number;
}

export interface BoysAllProps {
    boysDeadDate: null;
    boysEName: string;
    boysIsDead: number;
    boysJName: string;
    boysKName: string;
    boysNum: number;
    boysType: number;
    boysKVote: number;
    boysGVote: number;
}

export interface BoysOfficialProps {
    boysNum: number;
    boysRank: number;
    boysAVote: number;
    boysKName: string;
    boysEName: string;
    boysJName: string;
    boysType: number;
}

const apiUrl = import.meta.env.VITE_DEFAULT_API_URL;

export default function ResultPage() {
    //필터 선택한 것
    const [selected, setSelected] = useState<string>("forTeam");

    //새로고침 시간 확인
    const thisTimes = () => {
        const now = new Date(); // 현재 날짜 및 시간
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const hours = now.getHours();
        // if(filter.filtered.includes('forOff')){
        //     return '8회(3/23) 기준';
        // } else {
        return String(`${year}년 ${month}월 ${date}일 ${hours}시`);
        // }
    };

    // 1명 투표 데이터
    const getOneSurvey = async () => {
        const response = await axios.get(
            `http://boysplanet.hkamio.com:8080/getCurrSurvey?isDead=0`
        );
        const addList = new Map();
        response.data.oneResult.boysInfo.forEach((item: BoysListProps) =>
            addList.set(item.boysNum, item)
        );
        response.data.oneResult.oneVoteInfo.forEach((item: BoysVoteProps) =>
            addList.set(item.boysNum, { ...addList.get(item.boysNum), ...item })
        );
        return Array.from(addList.values());
    };
    const {
        data: oneSurvey,
        isLoading: oneSurveyLoading,
        isError: oneSurveyError,
    } = useQuery("oneSurvey", getOneSurvey);

    // 팀(여러 명) 투표 데이터
    const getTeamSurvey = async () => {
        const response = await axios.get(
            `http://boysplanet.hkamio.com:8080/getCurrSurvey?isDead=0`
        );
        const addList = new Map();
        response.data.teamResult.boysInfo.forEach((item: BoysListProps) =>
            addList.set(item.boysNum, item)
        );
        response.data.teamResult.teamVoteInfo.forEach((item: BoysVoteProps) =>
            addList.set(item.boysNum, { ...addList.get(item.boysNum), ...item })
        );
        return Array.from(addList.values());
    };
    const {
        data: teamSurvey,
        isLoading: teamSurveyLoading,
        isError: teamSurveyError,
    } = useQuery("teamSurvey", getTeamSurvey);

    //투표 데이터 받아 오기
    const getOfficialInfo = async () => {
        const response = await axios.get(
            `http://boysplanet.hkamio.com:8080/getOfficialInfo?ep=8`
        );
        return response.data.data;
    };

    const {
        data: officalInfo,
        isLoading: officalInfoLoading,
        isError: officalInfoError,
    } = useQuery("officalInfo", getOfficialInfo);

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {
            target: { value },
        } = e;
        setSelected(value);
    };
    return (
        <ResultStyle>
            <ResultTitleStyle>
                <p>연습생 순위</p>
                <p>Boys Current Rank</p>
            </ResultTitleStyle>
            <ResultContentsStyle>
                <ResultInfoStyle>
                    <div className="times">{thisTimes()}</div>
                    <div className="filter-box">
                        <select onChange={onChangeSelect}>
                            <option value="forTeam">3인 기준</option>
                            <option value="forOne">원픽 기준</option>
                            <option value="forOff">방송 순위</option>
                        </select>
                    </div>
                </ResultInfoStyle>
                <RankingStyle>
                    <ul className="boys-ranking">
                        {selected === "forOff" ? (
                            officalInfoLoading ? (
                                <div>Loading...</div>
                            ) : officalInfoError ? (
                                <div>Error</div>
                            ) : (
                                officalInfo?.map(
                                    (
                                        boys: BoysOfficialProps,
                                        index: number
                                    ) => (
                                        <li
                                            className={
                                                (boys.boysType === 0
                                                    ? "korea"
                                                    : "global") +
                                                (index < 9 ? " topNine" : "")
                                            }
                                            key={boys.boysKName}
                                        >
                                            <div className="content-wrap">
                                                <p className="rank">
                                                    {index + 1}위
                                                </p>
                                                <p className="rankKName">
                                                    {boys.boysKName}
                                                </p>
                                                <p className="rankEName">
                                                    {boys.boysEName}
                                                </p>
                                                <p>{boys?.boysAVote}표</p>
                                            </div>
                                        </li>
                                    )
                                )
                            )
                        ) : (
                              selected === "forTeam"
                                  ? teamSurveyLoading
                                  : oneSurveyLoading
                          ) ? (
                            <div>Loading...</div>
                        ) : (
                              selected === "forTeam"
                                  ? teamSurveyError
                                  : oneSurveyError
                          ) ? (
                            <div>Error</div>
                        ) : (
                            (selected === "forTeam"
                                ? teamSurvey
                                : oneSurvey
                            )?.map((boys: BoysAllProps, index: number) => (
                                <li
                                    className={
                                        (boys.boysType === 0
                                            ? "korea"
                                            : "global") +
                                        (index < 9 ? " topNine" : "")
                                    }
                                    key={boys.boysKName}
                                >
                                    <div className="content-wrap">
                                        <p className="rank">{index + 1}위</p>
                                        <p className="rankKName">
                                            {boys.boysKName}
                                        </p>
                                        <p className="rankEName">
                                            {boys.boysEName}
                                        </p>
                                        <p>
                                            {(boys?.boysKVote + boys?.boysGVote)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                            표
                                        </p>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </RankingStyle>
            </ResultContentsStyle>
        </ResultStyle>
    );
}
