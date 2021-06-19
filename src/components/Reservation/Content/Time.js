import React, { useEffect, useState } from "react";
import * as S from "./styles";
import WriteIfno from "../WriteInfo/WriteInfo";
import { request, requestWithAccessToken } from "../../../axios/axios";
import Triangle from "../../../assets/triangle.png";
import HourWrapper from "./HourWrapper";


const Time = ({ setPos, data, setData }) => {
    useEffect(() => {
        console.log(typeof (data.time))
        console.log(data.time)
    }, []);

    const [timeArr, setTimeArr] = useState([]);

    const posChange = () => {
        setPos(2);
    }

    useEffect(async (e) => {
        try {
            const data = await requestWithAccessToken("get", "/isReservation", {}, {}, "USER");
            console.log('date : ', data);
            data.forEach((i) => {
                const date = new Date(i.time);
                setTimeArr([...timeArr, date.getHours()]);
            })
            // for (let i = 0; i < data.length; i++) {
            //     const date = new Date(reserved[i]);
            //     setTimeArr([...data, date.getHours()])
            // }
            // console.log(timeArr);
        }
        catch (e) {
            console.log(e);
        }

    }, []);
    useEffect(() => {
        console.log('log : ', timeArr);
    }, [timeArr])
    const hourCk = (index) => {
        const time = data.time;
        time.setHours(index)
        time.setMinutes(0);
        time.setSeconds(0);
        setData({
            ...data,
            time: time
        })
        alert(time + '선택되었습니다');
        console.log(data);
    }




    return (
        <>
            <S.TimeWrapper>
                <S.Date>2/2</S.Date>
                <S.ExactTimeWrp>
                    <div>
                        {
                            [...Array(24)].map((i, index) => {
                                console.log(timeArr.includes(index))
                                return (
                                    <HourWrapper index={index} isReservation={timeArr.includes(index)} hourCk={hourCk} />
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