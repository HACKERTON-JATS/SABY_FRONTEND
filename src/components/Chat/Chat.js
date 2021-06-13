import React, { useState } from 'react';
import { request, requestWithAccessToken } from '../../axios/axios';
import Header from "../Main/Header/Header";
import * as S from "./styles";

const Chat = () => {

    const [number, setNumber] = useState(0);
    const [visF, setVisF] = useState("none");
    const [visS, setVisS] = useState("none");
    const [visT, setVisT] = useState("none");


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
    const changeVisF = () => {
        setVisF("block");
        setVisS("none");
        setVisT("none");
    }
    const changeVisS = () => {
        setVisF("none");
        setVisS("block");
        setVisT("none");
    }
    const changeVisT = () => {
        setVisF("none");
        setVisS("none");
        setVisT("block");
    }

    return (
        <>
            <Header />
            <S.Wrapper>
                <S.ChatBox>
                    <S.QWrapper>
                        <S.First>
                            <S.Question onClick={changeVisF}> 익명성이 정말 보장되나요?</S.Question>
                            <S.FAnswer visF={visF}>
                                네! 저희 서비스는 사용자의 필요한 정보만 저장하고 닉네임도 일부만 보이게끔 해서
                                <br />
                                관리자조차도 사용자의 정보를 알 수 없습니다.안심하고 사용하셔도 좋습니다!
                             </S.FAnswer>
                        </S.First>
                        <S.Second>
                            <S.Question onClick={changeVisS}>베이비박스에 아이를 맡기려면 어떻게해야 하나요?</S.Question>
                            <S.SAnswer visS={visS}>
                                메인페이지에서 예약하기를 누르시고 그 다음부턴 빈칸에 따라 차례대로 입력해주시면 됩니다.
                                <br />
                                단 예약하시기 전에 꼭 채팅 또는 전화로 상담을 해주세요!
                                <br />
                                그리고 아이를 맡기기 전에 충분히 생각을 해주세요.
                            </S.SAnswer>
                        </S.Second>
                        <S.Third>
                            <S.Question onClick={changeVisT}>꼭 출생신고를 해야하나요?</S.Question>
                            <S.TAnswer visT={visT}>
                                출생신고가 된 상태로 저희에게 온 아이들은 좋은 가정으로 입양보낼 수 있지만
                                <br />
                                출생신고조차 되어있지 않은 아이들은 입양이 불가능하여 보육원으로 보내지게 돼요.
                                <br />
                                보육원으로 보내진 아이들은 출생신고가 안 되어서 병원,
                                <br />
                                학교같은 기본적인 권리도 누리지 못할 거예요. 그러니 출생신고는 꼭! 해주세요
                            </S.TAnswer>
                        </S.Third>
                    </S.QWrapper>
                </S.ChatBox>
            </S.Wrapper>
        </>
    )
}

export default Chat;