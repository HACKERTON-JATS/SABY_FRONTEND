import React, { useEffect, useState } from "react";
import * as S from "./styles";
import O from "../../../assets/O.png";
import X from "../../../assets/X.png";
import { requestWithAccessToken } from "../../../axios/axios";

const Content = () => {
    const [pageNum, setPageNum] = useState(0);

    const getUserReservations = (e) => {
        requestWithAccessToken('GET', `/admin/reservation?page=${pageNum}`, {}, {}, 'ADMIN')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUserReservations();
    }, []);

    return (
        <S.Wrapper>
            <S.ReservationContainer>
                <S.Date>6월 1일</S.Date>
                <S.TextBlock>
                    <S.UserInfo>홍 정 * - 00시 ~ 01시</S.UserInfo>
                    <S.BabyInfo>
                        <S.Text>아이정보</S.Text>
                        <S.Image src={O} />
                    </S.BabyInfo>
                </S.TextBlock>
            </S.ReservationContainer>
        </S.Wrapper>
    );
}

export default Content;