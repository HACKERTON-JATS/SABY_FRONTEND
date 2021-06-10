import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { request } from "../../../axios/axios";
import Triangle from "../../../assets/triangle.png";

const Time = ({ setPos, data, setData }) => {

    const [hour, setHour] = useState("");



    useEffect(() => {
        console.log(data, data.time)
    }, [])

    const posChange = () => {
        setPos(2);
    }

    const hourCk = (e) => {
        setData({
            ...data,
            time: data.time.setHours('00', '00', '00' + (hour * 3600))
        })
        console.log(data.time)
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
                                    < S.HourWrapper onClick={(e) => { setHour(index); hourCk() }}> {index}시 ~{index + 1}시</S.HourWrapper>
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