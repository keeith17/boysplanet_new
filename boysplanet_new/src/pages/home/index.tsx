import Logo from "@/assets/BP-title.png";
import { HomeButtons, HomeGuide, HomeImgBox, HomeWrap } from "./homeStyle";
import { Button } from "@/components/button/Button";

export default function Homepage() {
    return (
        <HomeWrap>
            <HomeImgBox>
                <img src={Logo} alt="logo" />
            </HomeImgBox>
            <HomeGuide>
                <p>실제 투표가 아닌 여론 조사 서비스입니다.</p>
                <p>크롬 또는 사파리로 접속하세요.</p>
            </HomeGuide>
            <HomeButtons>
                <Button url="/VotePage" text="투표하러 가기" width="100%" />
                <Button
                    url="/ResultPage"
                    text="결과 확인하러 가기"
                    width="100%"
                />
            </HomeButtons>
        </HomeWrap>
    );
}
