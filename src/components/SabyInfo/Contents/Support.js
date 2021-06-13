import React from "react";
import * as S from './styles';
import Support1 from "../../../assets/Support1.png"

const Support = () => {
    return (
        <S.Wrapper>
            <S.ContentBox>
                <h1>1. 미혼모 상담 및 무료 출산 지원</h1>
                <ul>
                    <li>전화, 내방, SNS 등의 각종 홍보 활동과 상담들을 통해 <b>생명의 존엄성을 알리고</b> 주사랑공동체 및 정부, 협력 단체가 제공하는 <b>지원 서비스를 소개</b>해서 <b>낙태나 영아 유기를 최대한 예방</b>한다.</li>
                    <li>또한 경제적 어려움에 처한 미혼 임산부들에게 <b>무료 출산 서비스</b>를 알선시켜주어 <b>경제적 부담 없이 안전하게</b> 출산하도록 한다.</li>
                </ul>
                <h1>2. 미혼모 거주시설 지원</h1>
                <ul>
                    <li>아기와 함께 생활할 공간이 없는 미혼모들에게 <b>무상으로 거주공간을 제공</b>한다.</li>
                </ul>
                <h1>3. 베이비케어 키트 지원</h1>
                <ul>
                    <li>상담을 통해 아이를 양육하기로 한 미혼모들에게 <b>양육에 필요한 물품들을 매월 지원</b>해 준다.</li>
                    <li>분유, 기저귀, 물티슈 등과 개별적인 요구에 따라 로션, 약품, 책 등이 포함된다.</li>
                </ul>
                <h1>4. 베이비박스 업무 흐름도</h1>
                <ul>
                    <img style={{width: '700px'}}src={Support1} alt=""/>
                </ul>
            </S.ContentBox>
        </S.Wrapper>
    )
}

export default Support;