import {
    ModalButtonBox,
    ModalContainer,
    ModalH2,
    ModalLi,
    ModalLink,
    ModalWrap,
} from "./ModalStyle";

export default function Modal() {
    const onClickClose = () => {};
    return (
        <ModalWrap>
            <ModalContainer>
                <ul>
                    <ModalLi>
                        <ModalH2>투표가 완료되었습니다!</ModalH2>
                    </ModalLi>
                </ul>
                <ModalButtonBox>
                    <ModalLink to="/" onClick={onClickClose}>
                        처음으로
                    </ModalLink>
                    <ModalLink to="/ResultPage" onClick={onClickClose}>
                        결과 확인하러 가기
                    </ModalLink>
                </ModalButtonBox>
            </ModalContainer>
        </ModalWrap>
    );
}
