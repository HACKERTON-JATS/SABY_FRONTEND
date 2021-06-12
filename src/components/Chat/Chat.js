import React, { useState } from 'react';
import { request, requestWithAccessToken } from '../../axios/axios';
import Header from "../Main/Header/Header";
import * as S from "./styles";

const Chat = () => {

    const [number, setNumber] = useState(0);


    const QuestionId = async (e) => {
        try {
            await setNumber(1);
            console.log(number);
            const data = await requestWithAccessToken('get', `/questions?answer_id=${number}`, {}, {}, "USER")
            console.log(data);
            localStorage.setItem("Answer", data.answer);
        }
        catch (e) {
            console.log(e);
        }
    }

    const Ans = localStorage.getItem("Answer");

    return (
        <>
            <Header />
            <S.Wrapper>
                <S.ChatBox>
                    <S.QWrapper>
                        <S.First>
                            <S.Question onClick={QuestionId}> what is babybox? shalwijasd</S.Question>
                            <S.Answer>{Ans}</S.Answer>
                        </S.First>
                        <S.Second>
                            <S.Question>mtfknoob is good man woman u look so nigga</S.Question>
                            <S.Answer></S.Answer>
                        </S.Second>
                        <S.Third>
                            <S.Question>ssibal fuck qudtls Tlqkf wlqrkrhtlvek</S.Question>
                            <S.Answer></S.Answer>
                        </S.Third>
                    </S.QWrapper>
                </S.ChatBox>
            </S.Wrapper>
        </>
    )
}

export default Chat;