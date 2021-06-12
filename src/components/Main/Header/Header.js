import React, { useEffect } from "react";
import * as S from "./styles";
import { request } from "../../../axios/axios";
import { Link, useHistory } from "react-router-dom";

const Header = () => {

    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const history = useHistory();

    const toMain = () => {
        history.push('/Main');
    }

    useEffect(() => {
        console.log(name);
    }, [])
    return (
        <>
            <S.Empty>
                <S.Wrapper>
                    <S.Logo>
                        <S.Saby onClick={toMain}>SABY</S.Saby>
                    </S.Logo>
                    <S.NavBar>
                        <Link exact to="/Chat">채팅하기</Link>
                        <Link exact to="/Reservation/date">예약하기</Link>
                        <Link exact to="/Location">위치보기</Link>
                        <Link exact to="/Information/babybox">정보보기</Link>
                        <S.Login>{name == undefined ?
                            <Link exact to="/Signin" >로그인</Link> :
                            <Link exact to="/Main">{name}</Link>
                        }
                        </S.Login>
                    </S.NavBar>
                </S.Wrapper>
            </S.Empty>
        </>
    )
}

export default Header;