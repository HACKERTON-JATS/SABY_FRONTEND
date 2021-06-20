import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import O from '../../../assets/O.png';
import { requestWithAccessToken } from '../../../axios/axios';

const Content = () => {
    const [pageNum, setPageNum] = useState(-1);
    const [maxPage, setMaxPage] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUserReservations = async (page) => {
        setPageNum(pageNum + 1);
        const res = await requestWithAccessToken('GET', `/admin/reservation?page=${page + 1}`, {}, {}, 'ADMIN')
        setData([...data, ...res.reservationInfos]);
        setMaxPage(res.totalPages);
        setLoading(false);
        console.log((res.reservationInfos[0].fetusName))
    };

    function infiniteScroll() {
        let scrollHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
        );
        let scrollTop = Math.max(
            document.documentElement.scrollTop,
            document.body.scrollTop
        );
        let clientHeight = document.documentElement.clientHeight;

        if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
            setLoading(true);
        }
    }
    useEffect(() => {
        getUserReservations(pageNum)
    }, []);
    useEffect(() => {
        if (loading && pageNum < maxPage) getUserReservations(pageNum)

    }, [loading])
    useEffect((e) => {
        window.addEventListener("scroll", infiniteScroll);
        return () => window.removeEventListener('scroll', infiniteScroll)
    }, [])

    function mmddFormater(date) {
        const time = new Date(date);
        return `${time.getMonth() + 1}월 ${time.getDate()}일`;
    }

    function getHours(date) {
        const time = new Date(date);
        return time.getHours();
    }

    return (
        <S.Wrapper>
            {data &&
                data.map((i, index) => {
                    return (
                        <S.ReservationContainer key={index}>
                            <S.Date>{mmddFormater(i.time)}</S.Date>
                            <S.TextBlock>
                                <S.UserInfo>
                                    {JSON.stringify(i.fetusName).substr(0, 2) + " *"} - {`${getHours(i.time)}시 ~ ${getHours(i.time) + 1}시`}
                                </S.UserInfo>
                                <S.BabyInfo>
                                    <S.Text>아이정보</S.Text>
                                    <S.Image src={O} />
                                </S.BabyInfo>
                            </S.TextBlock>
                        </S.ReservationContainer>
                    );
                })}
        </S.Wrapper>
    );
};

export default Content;
