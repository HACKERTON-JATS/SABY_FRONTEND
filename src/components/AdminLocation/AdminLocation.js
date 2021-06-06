import React from 'react';
import * as S from "./styles";
import Header from "../Main/Header/Header";

const AdminLocation = () => {
    return (
        <S.Wrapper>
            <Header />
            <S.Main>
                <S.MapText>서울특별시 관악구 난곡동 646-151</S.MapText>
                <S.MapImg />
            </S.Main>
        </S.Wrapper>
    );
}

export default AdminLocation;