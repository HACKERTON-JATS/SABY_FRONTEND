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

                    <S.UserWrp>
                        {
                            [...Array(2)].map((i, index) => {
                                return (
                                    <S.UserChatBox>ㅁㄴㅇㅁㄴㅇ{index, index + 1}asdasd</S.UserChatBox>
                                )
                            })
                        }
                    </S.UserWrp>
                    <S.AdminWrp>
                        {
                            [...Array(2)].map((i, index) => {
                                return (
                                    <S.AdminChatBox>ㅁㄴㅇㅁㄴㅇ{index, index + 1}asdasd</S.AdminChatBox>
                                )
                            })
                        }
                    </S.AdminWrp>
                    <S.UserWrp>
                        {
                            [...Array(3)].map((i, index) => {
                                return (
                                    <S.UserChatBox>Hello my name is adifiojdasjiodijYiu ui</S.UserChatBox>
                                )
                            })
                        }
                    </S.UserWrp>
                    <S.AdminWrp>
                        {
                            [...Array(4)].map((i, index) => {
                                return (
                                    <S.AdminChatBox>Thank u very much u look so good</S.AdminChatBox>
                                )
                            })
                        }
                    </S.AdminWrp>
                    <S.TypingWrp>
                        <S.TypingInp></S.TypingInp>
                        <img src={Send} alt="" />
                    </S.TypingWrp>
                </S.ChatBox>
            </S.Wrapper>
        </>
    )
}

export default Chat;