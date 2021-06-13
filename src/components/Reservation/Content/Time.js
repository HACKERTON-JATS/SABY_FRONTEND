import React, { useEffect, useState } from "react";
import * as S from "./styles";
import WriteIfno from "../WriteInfo/WriteInfo";
import { request, requestWithAccessToken } from "../../../axios/axios";
import Triangle from "../../../assets/triangle.png";

const Time = ({ setPos, data, setData }) => {
    useEffect(() => {
        console.log(typeof (data.time))
    }, [])

    const [back, setBack] = useState("none");
    const [color, setColor] = useState("#000");

    const posChange = () => {
        setPos(2);
    }

    useEffect(async (e) => {
        try {
            const data = await requestWithAccessToken("get", "/isReservation", {}, {}, "USER");
            localStorage.setItem("time", data.time);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i])
            }

        }
        catch (e) {
            console.log(e);
        }

    }, [])
    const hourCk = (index) => {
        const time = data.time;
        localStorage.setItem("Retime", time)
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
                <p style={{ marginLeft: "20px" }} > {localStorage.getItem("Retime")}</p>
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