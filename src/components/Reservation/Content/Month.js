import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Triangle from "../../../assets/triangle.png";
import { request } from "../../../axios/axios";

const Month = ({ setPos, data, setData }) => {
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const posChange = () => {
        const now = new Date();
        now.setMonth(parseInt(month) - 1)
        now.setDate(date);
        setData({
            ...data,
            time: now
        });

        setPos(1);
    }


    return (
        <>
            <S.DateWrapper>
                <S.MonthWrp>
                    <S.MonthInpWrp>
                        <S.MonthInp value={month} onChange={(e) => setMonth(e.target.value)} />
                        <S.Underline></S.Underline>
                    </S.MonthInpWrp>
                    <S.Month>월</S.Month>
                </S.MonthWrp>
                <S.DateWrp>
                    <S.DateInpWrp>
                        <S.DateInp value={date} onChange={(e) => setDate(e.target.value)} />
                        <S.Underline ></S.Underline>
                    </S.DateInpWrp>
                    <S.DateP>일</S.DateP>
                </S.DateWrp>
            </S.DateWrapper>
            <S.Next>
                <a onClick={posChange}> 시간보기
                    <img src={Triangle} alt="" />
                </a>
            </S.Next>
        </>
    )
}

export default Month;