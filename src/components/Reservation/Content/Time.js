import React from "react";
import * as S from "./styles";
import Header from "../../Main/Header/Header";
import { NavLink } from "react-router-dom";
import Triangle from "../../../assets/triangle.png";

const Time = () => {
    return (
        <>
            <Header></Header>
            <S.TimeWrapper>
                <S.Date>6/1</S.Date>
                <S.ExactTimeWrp>
                    <div>
                        {
                            [...Array(24)].map((i, index) => {
                                return (
                                    <S.HourWrapper>{index}시 ~ {index + 1}시</S.HourWrapper>
                                )
                            })
                        }
                    </div>
                </S.ExactTimeWrp>
                <S.WriteBabyInfo>
                    <NavLink to="/Reservation-writeInfo">
                        예약하기
                        <img src={Triangle} alt="" />
                    </NavLink>
                </S.WriteBabyInfo>
            </S.TimeWrapper>
        </>
    )
}

export default Time;