import React, { useEffect, useState } from "react";
import Location from "../../../assets/Location.png";
import * as S from "./styles";
import { request, requestWithAccessToken } from "../../../axios/axios";
import { Link } from "react-router-dom";

const Content = () => {


    const name = localStorage.getItem("name");
    const timed = localStorage.getItem("timed");

    useEffect(async (e) => {

        try {
            const data = await requestWithAccessToken("get", "/reservation_time", {}, {}, "USER");
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
            }
            localStorage.setItem("timed", JSON.stringify(data))
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
                    <S.NameInf>{name == undefined ? <Link exact to="/signin">로그인해주세요</Link> : name}</S.NameInf>
                </S.Name>
                <S.Reservation>
                    <S.Alias>예약 일정</S.Alias>
                    <S.ReservationInf>{timed == undefined ? "예약일정이 없습니다" : timed.substr(10, 22)}</S.ReservationInf>
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