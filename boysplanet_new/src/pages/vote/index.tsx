import BoysList from "@/components/boysList/BoysList";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

export interface BoysListProps {
    boysDeadDate: null;
    boysEName: string;
    boysIsDead: number;
    boysJName: string;
    boysKName: string;
    boysNum: number;
    boysType: number;
}

const getBoysList = async () => {
    const response = await axios.get(
        "http://boysplanet.hkamio.com:8080/getBoysList?isDead=0&sort=kor"
    );
    return response.data;
};

export default function VotePage() {
    //세 명 픽 선택 state
    const [boysTeamSelect, setBoysTeamSelect] = useState<string[]>([]);
    //한 명 픽 선택 state
    const [boysOneSelect, setBoysOneSelect] = useState<string>("");

    //세 명 픽 검색 state
    const [searchData, setSearchData] = useState<string>("");
    //한 명 픽 검색 state
    const [searchDataOne, setSearchDataOne] = useState<string>("");

    //세 명 픽 선택 함수
    const onChangeTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { id },
        } = e;
        setBoysTeamSelect([...boysTeamSelect, id]);
    };

    //한 명 픽 선택 함수
    const onChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { id },
        } = e;
        setBoysOneSelect(id);
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

    //세 명 픽 부분 데이터
    const {
        data: boysList,
        isLoading,
        isError,
    } = useQuery("boysList", getBoysList);

    //원 픽 부분 데이터

    return (
        <div className="vote-wrap">
            <div className="team-pick">
                <div className="title">
                    <div className="title-gap">
                        <div className="title-wrap">
                            <p>세 번째 글로벌 투표 (3인)</p>
                            <p>The Third Global Vote (3 members)</p>
                        </div>
                    </div>
                </div>
                <div className="counting">
                    <div className="counting-gap">
                        <ul className="counting-wrap"></ul>
                    </div>
                </div>
                <div className="select">
                    <div className="search">
                        <input
                            type="search"
                            onChange={onChangeSearch}
                            placeholder="이름 검색 / Search Name"
                        />
                    </div>
                    <div className="names">
                        <div className="names-gap">
                            <ul className="names-wrap">
                                {isLoading ? (
                                    <div>Loading...</div>
                                ) : isError ? (
                                    <div>Error</div>
                                ) : (
                                    boysList?.map(
                                        (boys: BoysListProps) =>
                                            (boys.boysKName.includes(
                                                searchData
                                            ) ||
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="one-pick">
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
                    <div className="names">
                        <div className="names-gap">
                            <ul className="names-wrap">
                                {isLoading ? (
                                    <div>Loading...</div>
                                ) : isError ? (
                                    <div>Error</div>
                                ) : (
                                    boysList?.map(
                                        (boys: BoysListProps) =>
                                            (boys.boysKName.includes(
                                                searchDataOne
                                            ) ||
                                                boys.boysEName.includes(
                                                    searchDataOne.toUpperCase()
                                                )) && (
                                                <BoysList
                                                    boys={boys}
                                                    key={boys.boysEName}
                                                    onChange={onChangeOne}
                                                    boysSelect={boysOneSelect}
                                                />
                                            )
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="check">
                <div className="check-gap">
                    <div className="check-wrap">
                        <p>
                            세 번째 글로벌 투표 (3인):
                            <br />
                        </p>
                        <p>
                            나의 원 픽:
                            <br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="all-done">
                <div className="done-gap">
                    <div className="done-wrap"></div>
                </div>
            </div>
        </div>
    );
}
