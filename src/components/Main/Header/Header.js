import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <S.Wrapper>
            <S.Logo>
                <S.Saby>SABY</S.Saby>
            </S.Logo>
            <S.NavBar>
                <S.Chat>채팅하기</S.Chat>
                <S.Reservation>예약하기</S.Reservation>
                <S.Location>위치보기</S.Location>
                <S.Information>정보보기</S.Information>
                <Link to="/Login">로그인</Link>
            </S.NavBar>
        </S.Wrapper>
    )
}

export default Header;