import {
    ResultContentsStyle,
    ResultInfoStyle,
    ResultStyle,
    ResultTitleStyle,
} from "./resultStyle";

export default function ResultPage() {
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
    const onChangeSelect = () => {};
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
                            <option value="forSix">3인 기준</option>
                            <option value="forOne">원픽 기준</option>
                            <option value="forOff">방송 순위</option>
                        </select>
                    </div>
                </ResultInfoStyle>
                <div className="ranking">
                    <ul className="boys-ranking">{/* {boysTeamRankList} */}</ul>
                </div>
            </ResultContentsStyle>
        </ResultStyle>
    );
}
