import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "./styles";
import Header from "../../Main/Header/Header";

const WriteInfo = ({ data, setData }) => {

    useEffect(() => {
        console.log(data, typeof (data.time))

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
            Vaccination: e.target.value
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




    return (
        <>
            <S.Wrapper>
                <S.InpWrapper>
                    <S.Title>아이 정보</S.Title>
                    <S.Birth>
                        <S.Left>
                            <S.InpTitle>생년월일 <i style={{ color: "#ff4e4e" }}>*</i></S.InpTitle>
                            <S.InpN onChange={birthChange} type="date" />
                        </S.Left>
                        <S.Right>
                            <S.InpTitle>태어난 시각</S.InpTitle>
                            <S.InpN onChange={birthChange} type="time" />
                        </S.Right>
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
                    <button onClick={() => { console.log(data) }}>asdasd</button>
                </S.InpWrapper>
            </S.Wrapper>
        </>
    )
}


export default WriteInfo;