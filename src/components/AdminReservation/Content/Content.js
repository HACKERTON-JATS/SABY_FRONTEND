import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import O from '../../../assets/O.png'
import { requestWithAccessToken } from "../../../axios/axios";

const Content = () => {
    const [pageNum, setPageNum] = useState(0);
    const [data, setData] = useState([]);
    const scrollEvent = ()=>{
        let scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight  
        );
        let scrollTop = Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        let clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight-200) { 
            setPageNum(pageNum+1)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrollEvent)
        return () => window.removeEventListener("scroll",scrollEvent);
    },[])
    const getUserReservations = (e) => {
        requestWithAccessToken('GET', `/admin/reservation?page=${pageNum}`, {}, {}, 'ADMIN')
        .then((res) => {
            setData([...data, ...res.reservationInfos])
        })
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect(()=>{
        console.log(data);
    },[data])
    useEffect(() =>{
        getUserReservations();
        
    }, [pageNum]);
    function mmddFormater(date){
        const time=new Date(date);
        return `${time.getMonth()+1}월 ${time.getDate()}일`
    }
    function getHours(date){
        const time=new Date(date);
        return time.getHours();
    }
    return (
        <S.Wrapper>
            {
                data && data.map((i,index)=>{
                    return(
                        <S.ReservationContainer key={index}>
                            <S.Date>{mmddFormater(i.birthDate)}</S.Date>
                            <S.TextBlock>
                                <S.UserInfo>{i.fetusName} - {`${getHours(i.time)}시 ~ ${getHours(i.time)+1}시`}</S.UserInfo>
                                <S.BabyInfo>
                                    <S.Text>아이정보</S.Text>
                                    <S.Image src={O}/>
                                </S.BabyInfo>
                            </S.TextBlock>
                        </S.ReservationContainer>
                    )
                })
            }
        </S.Wrapper>
    );
}

export default Content;