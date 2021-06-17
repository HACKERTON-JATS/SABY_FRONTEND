import React, { useEffect, useState } from "react";
import Location from "../../../assets/Location.png";
import * as S from "./styles";
import { request, requestWithAccessToken } from "../../../axios/axios";
import { Link } from "react-router-dom";

const Content = () => {

    const [time, setTime] = useState([]);
    const listArr = [];

    const list = JSON.stringify(time).split(",");


    const name = localStorage.getItem("name");
    useEffect(() => {
        console.log(time)
    }, [time])

    useEffect(() => {
        console.log(list)
        for (let i = 0; i < time.length; i++) {
            if (list[i] == list[0]) {
                listArr.push(list[i].substr(10, 19))
            }
            else {
                listArr.push(list[i].substr(9, 19));
            }
        }
        console.log(listArr)
    })
    useEffect(async (e) => {

        try {
            const data = await requestWithAccessToken("get", "/reservation_time", {}, {}, "USER");
            console.log(data);
            setTime(data);

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
                    {/* <S.ReservationInf ></S.ReservationInf> */}
                    <S.ReservationInf>{listArr == null ? "예약일정이 없습니다" : listArr}</S.ReservationInf>
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