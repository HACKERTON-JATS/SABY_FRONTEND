import React from "react";
import Location from "../../../assets/Location.png";
import * as S from "./styles";

const Content = () => {
    return (
        <S.Wrapper>
            <S.Left>
                <S.Name>
                    <S.Alias>닉네임</S.Alias>
                    <S.NameInf>로그인해주세요</S.NameInf>
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