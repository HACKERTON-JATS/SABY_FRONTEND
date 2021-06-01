import React from "react";
import * as S from "./styles";
//import Logo from "../../assets/Logo.png";

const Login = () => {
    return (
        <S.Wrapper>
            <S.Modal>
                <S.SignUp>
                    <S.Top>
                        <S.SignUpP>Sign up</S.SignUpP>
                        <S.Slogan>배이비박스 지원 서비스</S.Slogan>
                    </S.Top>
                    <S.Logo>SABY</S.Logo>
                </S.SignUp>
                <S.InpWrapper>
                    <S></S>
                </S.InpWrapper>
            </S.Modal>
        </S.Wrapper>
    )
}

export default Login;