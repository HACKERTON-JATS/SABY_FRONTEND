import React, { useEffect } from "react";
import * as S from "./styles";
import Header from "../Main/Header/Header";
import Adopt from "./Contents/Adopt";
import ChildSave from "./Contents/ChildSave";
import Support from "./Contents/Support";
import WhatBabyBox from "./Contents/WhatBabyBox";

import { NavLink, Route, useHistory } from "react-router-dom";

const SabyInfo = ({ match }) => {
    const path = match.path;
    return (
        <>
            <Header />
            <S.Wrapper>
                <S.Title>
                    베이비박스 지원 서비스
                    <br />
                    <i>/</i>
                </S.Title>
                <S.BtnWrapper>
                    <NavLink activeClassName="selected" exact to="/Information/babybox">베이비박스란?</NavLink>
                    <NavLink activeClassName="selected" exact to="/Information/child">영아 보호 사업</NavLink>
                    <NavLink activeClassName="selected" exact to="/Information/support">미혼모 지원 사업</NavLink>
                    <NavLink activeClassName="selected" exact to="/Information/adopt">입양과 출생신고</NavLink>
                </S.BtnWrapper>
                <S.Content>
                    <Route path={`${path}/babybox`} exact component={WhatBabyBox}></Route>
                    <Route path={`${path}/child`} exact component={ChildSave}></Route>
                    <Route path={`${path}/support`} exact component={Support}></Route>
                    <Route path={`${path}/adopt`} exact component={Adopt}></Route>
                </S.Content>
            </S.Wrapper>
        </>
    );
}

export default SabyInfo;