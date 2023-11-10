import {
    ModalButtonBox,
    ModalContainer,
    ModalH2,
    ModalLi,
    ModalLink,
    ModalWrap,
} from "./ModalStyle";

interface ModalCloseProps {
    modalCloseFn: () => void;
}

export default function Modal({ modalCloseFn }: ModalCloseProps) {
    return (
        <ModalWrap>
            <ModalContainer>
                <ul>
                    <ModalLi>
                        <ModalH2>투표가 완료되었습니다!</ModalH2>
                    </ModalLi>
                </ul>
                <ModalButtonBox>
                    {/* <Button url="/" width="80%" text="처음으로" /> */}
                    <ModalLink to="/" onClick={modalCloseFn}>
                        처음으로
                    </ModalLink>
                    <ModalLink to="/ResultPage" onClick={modalCloseFn}>
                        결과 확인하러 가기
                    </ModalLink>
                </ModalButtonBox>
            </ModalContainer>
        </ModalWrap>
    );
}
