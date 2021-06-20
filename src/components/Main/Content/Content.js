import React, { useEffect, useState } from "react";
import MapLocation from "../../../assets/Location.png";
import * as S from "./styles";
import { request, requestWithAccessToken } from "../../../axios/axios";
import { Link } from "react-router-dom";

const Content = () => {

    const [time, setTime] = useState([]);
    const [listArr, setListArr] = useState([]);

    const logout = async () => {
        try {
            await requestWithAccessToken("get", "/logout", {}, {}, "USER");
            localStorage.clear();
            window.location.reload();
            console.log("logout success");
        } catch (e) {
            console.log(e);
        }

    }


    const name = localStorage.getItem("name");
    useEffect(() => {
        if (name != null && name.length > 2) {
            name.substr(0, 2);
            console.log(name.substr(0, 2));
        }
    }, [time])

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
                    <S.NameInf>{name == undefined ? <Link exact to="/signin">로그인해주세요</Link> : name.substr(0, 2) + " *"}</S.NameInf>
                    <S.Logout onClick={logout}>{name == undefined ? <Link exact to="/signin">로그인</Link> : "로그아웃"}</S.Logout>
                </S.Name>
                <S.Reservation>
                    <S.Alias>예약 일정</S.Alias>
                    {/* <S.ReservationInf ></S.ReservationInf> */}
                    <S.ReservationInf>{time.map((e, index) => {
                        return (
                            <S.Reserved>{e.time}</S.Reserved>
                        )
                    })}</S.ReservationInf>
                </S.Reservation>
            </S.Left>
            <S.Right>
                <S.ComingWay>가시는길</S.ComingWay>
                <S.Map src={MapLocation} />
            </S.Right>
        </S.Wrapper>
    );
}

export default Content;