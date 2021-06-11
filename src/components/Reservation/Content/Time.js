import React, { useEffect, useState } from "react";
import * as S from "./styles";
import WriteIfno from "../WriteInfo/WriteInfo";
import { request } from "../../../axios/axios";
import Triangle from "../../../assets/triangle.png";

const Time = ({ setPos, data, setData }) => {
    useEffect(() => {
        console.log(typeof (data.time))
    }, [])

    const posChange = () => {
        setPos(2);
    }

    const hourCk = (index) => {
        const time = data.time;
        time.setHours(index)
        time.setMinutes(0);
        time.setSeconds(0);
        setData({
            ...data,
            time: time
        })
        console.log(data);
    }


    return (
        <>
            <S.TimeWrapper>
                <S.Date>6/1</S.Date>
                <S.ExactTimeWrp>
                    <div>
                        {
                            [...Array(24)].map((i, index) => {
                                return (
                                    < S.HourWrapper onClick={(e) => { hourCk(index); }}> {index}시 ~{index + 1}시</S.HourWrapper>
                                )
                            })
                        }
                    </div>
                </S.ExactTimeWrp>
                <S.WriteBabyInfo>
                    <a onClick={posChange}>
                        예약하기
                        <img src={Triangle} alt="" />
                    </a>
                </S.WriteBabyInfo>
            </S.TimeWrapper>
        </>
    )
}

export default Time;