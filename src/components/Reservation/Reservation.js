import React from "react";
import * as S from "./styles";
import Header from "../Main/Header/Header";
import Time from "./Content/Time";
import Date from "./Content/Date";
import WriteInfo from "./WriteInfo/WriteInfo";
import { Route } from "react-router-dom";

const Reservation = ({ match }) => {
    const path = match.path
    return (
        <>
            <Header />
            <S.Wrapper>
                <Route path={`${path}/date`} exact component={Date}></Route>
                <Route path={`${path}/time`} exact component={Time}></Route>
                <Route path={`${path}/writeInfo`} exact component={WriteInfo}></Route>
            </S.Wrapper>
        </>
    )
}

export default Reservation;