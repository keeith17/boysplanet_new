import BoysList from "@/components/boysList/BoysList";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import {
    BoysListStyle,
    CheckNameStyle,
    CountStyle,
    ListCheckStyle,
    PickStyle,
    SubmitStyle,
    VoteStyle,
} from "./voteStyle";

interface ModalVoteProps {
    modalOpenFn: () => void;
}
export interface BoysListProps {
    boysDeadDate: null;
    boysEName: string;
    boysIsDead: number;
    boysJName: string;
    boysKName: string;
    boysNum: number;
    boysType: number;
}

interface FormdataProps {
    teamPickSurvey: number[];
    onePickSurvey: number | null;
}

const apiUrl = import.meta.env.VITE_DEFAULT_API_URL;
const getBoysList = async () => {
    const response = await axios.get(
        `http://boysplanet.hkamio.com:8080/getBoysList?isDead=0&sort=kor`
    );
    return response.data;
};

export default function VotePage({ modalOpenFn }: ModalVoteProps) {
    const mutation = useMutation(
        // 첫 번째 매개변수: 비동기 함수, 서버에 요청을 보내는 역할
        async (postData: FormdataProps) => {
            const response = await axios.post(
                `http://boysplanet.hkamio.com:8080/survey`,
                postData
            );

            return response.data; // 성공 시 응답 데이터를 반환
        },
        {
            // 옵션: mutation 상태를 관리하기 위한 다양한 옵션들
            onSuccess: (data) => {
                console.log("POST 성공:", data);
            },
            onError: (error) => {
                console.error("POST 실패:", error);
            },
        }
    );

    const onClickPost = () => {
        mutation.mutate({
            teamPickSurvey: teamSelectSubmit,
            onePickSurvey: oneSelectSubmit,
        });
        modalOpenFn();
    };
    //세 명 픽 선택 state
    const [boysTeamSelect, setBoysTeamSelect] = useState<string[]>([]);
    //한 명 픽 선택 state
    const [boysOneSelect, setBoysOneSelect] = useState<string>("");

    //세 명 픽 데이터 통신을 위한 state (number로 보내 달라고 해서)
    const [teamSelectSubmit, setTeamSelectSubmit] = useState<number[]>([]);
    //한 명 픽 데이터 통신을 위한 state (number로 보내 달라고 해서)
    const [oneSelectSubmit, setOneSelectSubmit] = useState<number | null>(null);

    //세 명 픽 검색 state
    const [searchData, setSearchData] = useState<string>("");
    //한 명 픽 검색 state
    const [searchDataOne, setSearchDataOne] = useState<string>("");

    //세 명 픽 선택 함수
    const onChangeTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
        let imsi = [];
        let imsi2 = [];
        const {
            target: { name, value, checked },
        } = e;
        if (checked) {
            if (boysTeamSelect.length >= 3) {
                alert("세 명만 선택 가능합니다!");
            } else {
                setBoysTeamSelect([...boysTeamSelect, name]);
                setTeamSelectSubmit([...teamSelectSubmit, parseInt(value)]);
            }
        } else {
            imsi = boysTeamSelect.filter((item) => item !== name);
            imsi2 = teamSelectSubmit.filter((item) => item !== parseInt(value));
            setBoysTeamSelect(imsi);
            setTeamSelectSubmit(imsi2);
        }
    };

    //한 명 픽 선택 함수
    const onChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = e;
        setBoysOneSelect(name);
        setOneSelectSubmit(parseInt(value));
    };

    //세 명 픽 검색하는 부분
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        setSearchData(value);
    };
    //원 픽 검색하는 부분
    const onChangeSearchOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        setSearchDataOne(value);
    };

    //명단 데이터
    const {
        data: boysList,
        isLoading,
        isError,
    } = useQuery("boysList", getBoysList);

    return (
        <VoteStyle>
            <PickStyle>
                <div className="title">
                    <div className="title-gap">
                        <div className="title-wrap">
                            <p>세 번째 글로벌 투표 (3인)</p>
                            <p>The Third Global Vote (3 members)</p>
                        </div>
                    </div>
                </div>
                <CountStyle>
                    <ul className="counting-wrap">
                        {boysTeamSelect?.map((index) => {
                            return <li className="kok" key={index}></li>;
                        })}
                    </ul>
                </CountStyle>
                <div className="select">
                    <div className="search">
                        <input
                            type="search"
                            onChange={onChangeSearch}
                            placeholder="이름 검색 / Search Name"
                        />
                    </div>
                    <BoysListStyle>
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : isError ? (
                            <div>Error</div>
                        ) : (
                            boysList?.map(
                                (boys: BoysListProps) =>
                                    (boys.boysKName.includes(searchData) ||
                                        boys.boysEName.includes(
                                            searchData.toUpperCase()
                                        )) && (
                                        <BoysList
                                            boys={boys}
                                            key={boys.boysEName}
                                            onChange={onChangeTeam}
                                            boysSelect={boysTeamSelect}
                                        />
                                    )
                            )
                        )}
                    </BoysListStyle>
                </div>
            </PickStyle>
            <PickStyle>
                <div className="title">
                    <div className="title-gap">
                        <div className="title-wrap">
                            <p>나의 원픽</p>
                            <p>My One Pick</p>
                        </div>
                    </div>
                </div>
                <div className="select">
                    <div className="search">
                        <input
                            type="search"
                            onChange={onChangeSearchOne}
                            placeholder="이름 검색 / Search Name"
                        />
                    </div>
                    <BoysListStyle>
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : isError ? (
                            <div>Error</div>
                        ) : (
                            boysList?.map(
                                (boys: BoysListProps) =>
                                    (boys.boysKName.includes(searchDataOne) ||
                                        boys.boysEName.includes(
                                            searchDataOne.toUpperCase()
                                        )) && (
                                        <BoysList
                                            boys={boys}
                                            key={boys.boysEName + "one"}
                                            onChange={onChangeOne}
                                            boysSelect={boysOneSelect}
                                        />
                                    )
                            )
                        )}
                    </BoysListStyle>
                </div>
            </PickStyle>
            <ListCheckStyle>
                <p>
                    세 번째 글로벌 투표 (3인):
                    <br />
                    {boysTeamSelect?.map((item, index) => {
                        return (
                            <CheckNameStyle key={index}>{item}</CheckNameStyle>
                        );
                    })}
                </p>
                <p>
                    나의 원 픽:
                    <br />
                    {boysOneSelect}
                </p>
            </ListCheckStyle>
            <SubmitStyle>
                {boysTeamSelect.length === 3 && boysOneSelect !== "" && (
                    <button onClick={onClickPost}>투표 완료</button>
                )}
            </SubmitStyle>
        </VoteStyle>
    );
}
