import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import O from "../../../assets/O.png";
import { request, requestWithAccessToken } from "../../../axios/axios";
import X from "../../../assets/X.png";

const Content = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        console.log(window.localStorage.getItem("adminToken"));

        requestWithAccessToken("get", `/admin/reservation?page=${pageNumber}`, {}, {}, "ADMIN")
            .then((res) => {
                const data = res.reservationList;
                setMaxPage(data.totalPages);
                for (let i = 0; i < data.reservationList.length; i++) {
                    setPostData((e) => [...e, data.reservationList[i]]);
                }

            }).catch((err) => { console.log(err) })
    }, [pageNumber]);

    const infiniteScroll = useCallback(() => {
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        const clientHeight = document.documentElement.clientHeight;

        console.log(scrollTop + clientHeight, scrollHeight);
        if (Math.round(scrollTop) + clientHeight === scrollHeight) {
            if (maxPage > pageNumber) {
                setPageNumber(pageNumber + 1);
            }
        }
    });

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll, true);
        return () => { window.removeEventListener('scroll', infiniteScroll, true) }
    }, [infiniteScroll]);

    return (
        <S.Wrapper>
            <S.ReservationContainer>
                {
                    postData.map((e, index) => {
                        <S.TextBlock key={index}>
                            <S.UserInfo>{e.userName}</S.UserInfo>
                            <S.BabyInfo>
                                <S.Text>아이정보</S.Text>
                                <S.Img>{e.is_take}</S.Img>
                            </S.BabyInfo>
                        </S.TextBlock>
                    })
                }
            </S.ReservationContainer>
        </S.Wrapper>
    );
}

export default Content;