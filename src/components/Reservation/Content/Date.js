import React from "react";
import Header from "../../Main/Header/Header";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
import Triangle from "../../../assets/triangle.png";

const Date = () => {
    return (
        <>
            <Header />
            <S.DateWrapper>
                <S.MonthWrp>
                    <S.MonthInpWrp>
                        <S.MonthInp />
                        <S.Underline></S.Underline>
                    </S.MonthInpWrp>
                    <S.Month>월</S.Month>
                </S.MonthWrp>
                <S.DateWrp>
                    <S.DateInpWrp>
                        <S.DateInp></S.DateInp>
                        <S.Underline></S.Underline>
                    </S.DateInpWrp>
                    <S.DateP>일</S.DateP>
                </S.DateWrp>
            </S.DateWrapper>
            <S.Next>
                <NavLink exact to="/Reservation-time">
                    시간보기
                <img src={Triangle} alt="" />
                </NavLink>
            </S.Next>
        </>
    )
}

export default Date;