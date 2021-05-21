import React from "react";
import * as S from "./styles";
import Header from "./Header/Header";
import Content from "./Content/Content";

const Main = () => {
    return (
        <S.Wrapper>
            <Header />
            <Content />
        </S.Wrapper>
    )
}

export default Main;