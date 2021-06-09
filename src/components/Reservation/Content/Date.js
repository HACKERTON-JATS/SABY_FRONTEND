import React, { useState } from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
import Triangle from "../../../assets/triangle.png";
import { request } from "../../../axios/axios";

const Date = () => {

    const [date, setDate] = useState({
        month: "",
        day: ""
    });

    const { month, day } = date;

    const arr = [];

    const monthChange = (e) => {
        setDate({
            ...date,
            month: e.target.value
        });
    }

    const dayChange = (e) => {
        setDate({
            ...date,
            day: e.target.value
        });
    }


    const pushDate = () => {
        console.log(day.length, month)
        if (month.length < 1 && month.length > 2 && day.length < 1 && day.length > 2) {
            alert("올바르게 입력해주세요");
            return;
        }
        else {
            arr.push(date);
        }

    }


    return (
        <>
            <S.DateWrapper>
                <S.MonthWrp>
                    <S.MonthInpWrp>
                        <S.MonthInp onChange={monthChange} />
                        <S.Underline></S.Underline>
                    </S.MonthInpWrp>
                    <S.Month>월</S.Month>
                </S.MonthWrp>
                <S.DateWrp>
                    <S.DateInpWrp>
                        <S.DateInp onChange={dayChange} />
                        <S.Underline></S.Underline>
                    </S.DateInpWrp>
                    <S.DateP>일</S.DateP>
                </S.DateWrp>
            </S.DateWrapper>
            <S.Next>
                <NavLink onClick={pushDate} exact to="/Reservation/time">
                    시간보기
                <img src={Triangle} alt="" />
                </NavLink>
            </S.Next>
        </>
    )
}

export default Date;