import React, { useEffect } from "react";
import * as S from "./styles";

const HourWrapper = ({ index, hourCk, isReservation }) => {

    return (
        <S.HourWrapper
            isReservation={isReservation}
            onClick={(e) => { !isReservation && hourCk(index); }}>
            {index}시 ~{index + 1}시
        </S.HourWrapper>
    )
}

export default HourWrapper;