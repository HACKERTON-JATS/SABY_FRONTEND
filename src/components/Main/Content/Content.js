import React, { useEffect, useState } from "react";
import Location from "../../../assets/Location.png";
import * as S from "./styles";
import { request, requestWithAccessToken } from "../../../axios/axios";

const Content = () => {


    const name = localStorage.getItem("name");

    useEffect(async (e) => {

        try {
            const data = await requestWithAccessToken("get", "/reservation_time", {}, {}, "USER");
            console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <S.Wrapper>
            <S.Left>
                <S.Name>
                    <S.Alias>닉네임</S.Alias>
                    <S.NameInf>{name == undefined ? "로그인 해주세요" : name}</S.NameInf>
                </S.Name>
                <S.Reservation>
                    <S.Alias>예약 일정</S.Alias>
                    <S.ReservationInf>예약일정이 없습니다</S.ReservationInf>
                </S.Reservation>
            </S.Left>
            <S.Right>
                <S.ComingWay>가시는길</S.ComingWay>
                <S.Map src={Location} />
            </S.Right>
        </S.Wrapper>
    );
}

export default Content;