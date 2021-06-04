import React from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";

const Signup = () => {
    return (
        <S.Wrapper>
            <S.Modal>
                <S.SignInWrp>
                    <S.Top>
                        <S.SignInP>Sign up</S.SignInP>
                        <S.Slogan>배이비박스 지원 서비스</S.Slogan>
                    </S.Top>
                    <S.Logo>SABY</S.Logo>
                </S.SignInWrp>
                <S.InpWrapper>
                    <S.InpDisplay>
                        <S.Name>
                            <S.UserName>username</S.UserName>
                            <S.NameInp />
                        </S.Name>
                        <S.Email>
                            <S.UserEmail>email</S.UserEmail>
                            <S.EmailInp />
                        </S.Email>
                        <S.Password>
                            <S.UserPassword>password</S.UserPassword>
                            <S.PasswordInp />
                        </S.Password>
                        <S.Password>
                            <S.UserPassword>password check</S.UserPassword>
                            <S.PasswordInp />
                        </S.Password>
                        <S.SignInBtn><NavLink exact to="/Signin">sign up</NavLink></S.SignInBtn>
                        <S.GoSignUp>if you have an account <NavLink exact to="/Signin">Click here !</NavLink></S.GoSignUp>
                    </S.InpDisplay>
                </S.InpWrapper>
            </S.Modal>
        </S.Wrapper>
    )
}

export default Signup;