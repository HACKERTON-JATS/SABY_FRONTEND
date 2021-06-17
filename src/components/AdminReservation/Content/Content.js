import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { requestWithAccessToken } from "../../../axios/axios";

const Content = () => {
    const [pageNum, setPageNum] = useState(1);
    const [post, setPost] = useState([]);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        requestWithAccessToken('GET', `/admin/reservation?page=${pageNum}`, {}, {}, 'ADMIN')
            .then((res) => {
                const data = res.reservationInfors;
                console.log(res)
                setMaxPage(data.totalPages);
                for (let i = 0; i < data.data.length; i++) {
                    setPost((e) => [...e, data.data[i]]);
                }
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [pageNum]);


    const infiniteScroll = useCallback(() => {
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        const clientHeight = document.documentElement.clientHeight;

        console.log(scrollTop + clientHeight, scrollHeight);
        if (Math.round(scrollTop) + clientHeight === scrollHeight) {
            if (maxPage > pageNum) {
                setPageNum(pageNum + 1);
            }
        }
    });

    useEffect(() => {
        window.addEventListener("scroll", infiniteScroll, true);
        return () => { window.removeEventListener('scroll', infiniteScroll, true) }
    }, [infiniteScroll])

    return (
        <S.Wrapper>
            <S.ReservationContainer>
                <S.Date>{}</S.Date>
                <S.TextBlock>
                    {
                        post.map((e, index) => {
                            return (
                                <S.TextBlock key={index}>
                                    <S.UserInfo>{e.username}</S.UserInfo>
                                    <S.BabyInfo>
                                        <S.Text>아이정보</S.Text>
                                        <S.Img>{e.is_take}</S.Img>
                                    </S.BabyInfo>
                                </S.TextBlock>
                            )
                        })
                    }
                </S.TextBlock>
            </S.ReservationContainer>
        </S.Wrapper>
    );
}

export default Content;