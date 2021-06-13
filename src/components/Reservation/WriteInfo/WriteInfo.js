import React, { useEffect, useState } from "react";
import { request, requestWithAccessToken } from "../../../axios/axios";
import { NavLink, useHistory } from "react-router-dom";
import * as S from "./styles";
import Header from "../../Main/Header/Header";

const WriteInfo = ({ data, setData }) => {

    const history = useHistory();

    const { time, birth_date, kid_name, vaccination, fetus_name, request, caution } = data

    useEffect(() => {
        console.log(data, typeof (data.time))
        console.log(data)
        console.log(window.localStorage.getItem('token'))
    }, [])


    const nameChange = (e) => {
        setData({
            ...data,
            kid_name: e.target.value
        });
    }

    const birthChange = (e) => {
        setData({
            ...data,
            birth_date: e.target.value
        });
    }

    const fetusChange = (e) => {
        setData({
            ...data,
            fetus_name: e.target.value
        });
    }

    const vaccinationChange = (e) => {
        setData({
            ...data,
            vaccination: e.target.value
        })
    }

    const requestChange = (e) => {
        setData({
            ...data,
            request: e.target.value
        });
    }

    const cautionChange = (e) => {
        setData({
            ...data,
            caution: e.target.value
        });
    }


    const sendData = async (e) => {
        try {
            await requestWithAccessToken("post", "/reservation", {}, {

                "kidInformation": {
                    "birth_date": birth_date,
                    "kid_name": kid_name,
                    "vaccination": vaccination,
                    "fetus_name": fetus_name,
                    "request": request,
                    "caution": caution
                }, "reservation": {
                    "time": time
                }

            }, "USER");
            history.push('/Main');
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <S.Wrapper>
                <S.InpWrapper>
                    <S.Title>아이 정보</S.Title>
                    <S.Birth>
                        <S.Left>
                            <S.InpTitle>생년월일 <i style={{ color: "#ff4e4e" }}>*</i></S.InpTitle>
                            <S.InpN onChange={birthChange} type="datetime-local" />
                        </S.Left>
                    </S.Birth>

                    <S.Name>
                        <S.Left>
                            <S.InpTitle>이름 <i style={{ color: "#ff4e4e" }}>*</i></S.InpTitle>
                            <S.InpN onChange={nameChange} />
                        </S.Left>
                        <S.Right>
                            <S.InpTitle>태명 </S.InpTitle>
                            <S.InpN onChange={fetusChange} />
                        </S.Right>
                    </S.Name>
                    <S.Vaccination>
                        <S.InpTitle>예방 접종 여부  <i style={{ color: "#ff4e4e" }}>*</i></S.InpTitle>
                        <S.InpC onChange={vaccinationChange} />
                    </S.Vaccination>
                    <S.Advice>
                        <S.InpTitle>목사님께 당부말씀</S.InpTitle>
                        <S.InpA onChange={requestChange}></S.InpA>
                    </S.Advice>
                    <S.Advice>
                        <S.InpTitle>아이 주의 사항</S.InpTitle>
                        <S.InpA onChange={cautionChange}></S.InpA>
                    </S.Advice>
                    <S.ReservBtn>
                        <button style={{ cursor: "pointer" }} onClick={sendData}>예약하기</button>
                    </S.ReservBtn>
                </S.InpWrapper>
            </S.Wrapper>
        </>
    )
}


export default WriteInfo;