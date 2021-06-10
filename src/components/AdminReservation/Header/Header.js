import React from "react";
import * as S from "./styles";

const Header = () => {
    return (
        <S.Wrapper>
            <S.Logo>
                <S.Saby>SABY</S.Saby>
            </S.Logo>
            <S.Subtitle>
                <S.Span>예약일정 -</S.Span>
                <S.Span>관리자</S.Span>
            </S.Subtitle>
        </S.Wrapper>
    )
}

export default Header;