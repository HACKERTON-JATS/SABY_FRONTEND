import React from "react";
import * as S from "./styles";
import BBImg from "../../assets/BabyBasket.png";
import GoMainImg from "../../assets/GoMain.png";
import { NavLink } from "react-router-dom";

const Enter = () => {
    return (
        <S.BackWrapper>
            <S.Title>SABY</S.Title>
            <S.Slogan>베이비박스 지원 서비스</S.Slogan>
            <S.ChangePage>
                <S.InformationWrp>
                    <NavLink to="/">
                        <S.InfShadow >
                            <S.SeeInf>정보 보러가기</S.SeeInf>
                            <S.HiddenInf>베이비 박스에 대해 자세한 정보를 보러가세요.</S.HiddenInf>
                        </S.InfShadow>
                    </NavLink>
                    <S.BBInformation src={BBImg} />  {/* BB is BabyBox */}
                </S.InformationWrp>
                <S.MainPageWrp>
                    <NavLink to="/Main">
                        <S.MainShadow>
                            <S.SeeHome>메인페이지로</S.SeeHome>
                            <S.HiddenHome>SABY의 메인페이지로 가세요.</S.HiddenHome>
                        </S.MainShadow>
                    </NavLink>
                    <S.GoMain src={GoMainImg} />
                </S.MainPageWrp>
            </S.ChangePage>
        </S.BackWrapper>
    )
}

export default Enter;