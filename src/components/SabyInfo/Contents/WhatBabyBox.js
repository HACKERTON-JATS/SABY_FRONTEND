import React from "react";
import * as S from './styles';
import { Link, Route } from "react-router-dom";

const WhatBabyBox = () => {
    return (
        <S.Wrapper>
            <S.ContentBox>
                <h1>1. 베이비박스란</h1>
                <ul>
                    
                    <li>유기 위험에 처해져 있는 아기의 생명을 살리기 위해 만들어진 <b>생명 보호 장치</b>이다.</li>
                    <li>첫 번째 베이비박스는 이종락 목사에 의해 2009년 12월 <b>주사랑 공동체 교회</b>에서 처음으로 설치되었고, 경기도 군포의 <b>새가나안 교회</b>에서 두 번째 베이비 박스가  운영되고 있다.</li>
                </ul>
                <h1>2. 베이비박스의 등장배경</h1>
                <ul>
                    <li>이종락 목사는 중증 장애를 가진 여러 아이들을 극진히 돌보았는데 이런 소문이 퍼지자 중증 장애로 <b>버림 받은 아기들이 이종락 목사에게로 보내지기 시작했다.</b> 그러던 와중 어느 추운 날, 밖에서 아이가 오랫동안 방치되어 있던 것을 목격했다.</li>
                    <li>이종락 목사는 버림받은 아이들의 생명이 안전하게 보호될 수 있는 방법을 찾기 위해 고민하기 시작했다. 이종락 목사는 베이비박스에 관한 소식을 접하고 연구를 거듭한 결과 2009년 12월 <b>한국 최초로 베이비 박스를 설치하고 운영</b>하게 되었다.</li>
                </ul>
                <h1>3. 베이비박스에서 하는 일</h1>
                <ul>
                    <li><Link exact to="/Information/child">영아 보호 사업</Link></li>
                    <li><Link exact to="/Information/support">미혼모 지원 사업</Link></li>
                </ul>
            </S.ContentBox>
        </S.Wrapper>
    )
}

export default WhatBabyBox;