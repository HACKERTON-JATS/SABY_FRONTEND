import React, { useEffect, useState } from "react";
import * as S from "./styles";
import WriteIfno from "../WriteInfo/WriteInfo";
import { request, requestWithAccessToken } from "../../../axios/axios";
import Triangle from "../../../assets/triangle.png";

const Time = ({ setPos, data, setData }) => {
    useEffect(() => {
        console.log(typeof (data.time))
        console.log(data)
    }, [])

    const timeArr = []

    const posChange = () => {
        setPos(2);
    }

    useEffect(async (e) => {
        try {
            const data = await requestWithAccessToken("get", "/isReservation", {}, {}, "USER");

            const reserved = JSON.stringify(data).split(",");
            for (let i = 0; i < data.length; i++) {
                if (reserved[i] == reserved[0]) {
                    console.log(reserved[i].substr(21, 2));
                    timeArr.push(reserved[i].substr(21, 2));
                }
                else {
                    console.log(reserved[i].substr(20, 2));
                    timeArr.push(reserved[i].substr(20, 2));
                }
            }
            console.log(timeArr);
        }
        catch (e) {
            console.log(e);
        }

    }, [])
    const hourOverlap = (timeArr) => {

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
                <S.Date></S.Date>
                <S.ExactTimeWrp>
                    <div>
                        {
                            [...Array(24)].map((i, index) => {
                                return (
                                    <S.HourWrapper onClick={(e) => { hourCk(index); }}> {index}시 ~{index + 1}시</S.HourWrapper>
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