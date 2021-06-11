import React, { useEffect } from "react";
import * as S from "./styles";
import { request } from "../../../axios/axios";
import { Link } from "react-router-dom";

const Header = () => {

    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');

    useEffect(() => {
        console.log(name);
    }, [])
    return (
        <>
            <S.Empty>
                <S.Wrapper>
                    <S.Logo>
                        <S.Saby>SABY</S.Saby>
                    </S.Logo>
                    <S.NavBar>
                        <Link exact to="/Chat">채팅하기</Link>
                        <Link exact to="/Reservation/date">예약하기</Link>
                        <Link exact to="/Location">위치보기</Link>
                        <Link exact to="/Information/babybox">정보보기</Link>
                        <Link exact to="/Signin">로그인</Link>
                        <p>{name}</p>
                    </S.NavBar>
                </S.Wrapper>
            </S.Empty>
        </>
    )
}

export default Header;