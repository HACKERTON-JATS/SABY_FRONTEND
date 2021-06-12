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
                    <S.FirstQ></S.FirstQ>
                    <S.SecondQ></S.SecondQ>
                    <S.ThirdQ></S.ThirdQ>
                </S.ChatBox>
            </S.Wrapper>
        </>
    )
}

export default Chat;