import React from 'react';
import Header from "../Main/Header/Header";
import * as S from "./styles";
import Send from "../../assets/Send.png";

const Chat = () => {
    return (
        <>
            <Header />
            <S.Wrapper>
                <S.ChatBox>
                    <S.FirstQ>베이비박스가 정확히 무엇인가요?</S.FirstQ>
                    <S.SecondQ>아이의 정보를 입력할 떄 정확히 무엇을 해야 하나요?</S.SecondQ>
                    <S.ThirdQ>아이의 정보가 ㅁㄴㅇ123일ㅉ떄 어쩌라고 박상우 빨리 만들어 API</S.ThirdQ>
                </S.ChatBox>
            </S.Wrapper>
        </>
    )
}

export default Chat;