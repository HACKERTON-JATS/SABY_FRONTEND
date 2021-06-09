import React, { useState } from "react";
import * as S from "./styles";
import { request } from "../../../axios/axios";
import { NavLink, useHistory } from "react-router-dom";

const Signin = () => {

    const [data, setData] = useState({
        id: "",
        password: ""
    });

    const history = useHistory();


    const { id, password } = data;

    const idChange = (e) => {
        setData({
            ...data,
            id: e.target.value
        });
    }

    const pwChange = (e) => {
        setData({
            ...data,
            password: e.target.value
        });
    }


    const SigninBtn = async (e) => {
        console.log(id, password)
        try {
            const data = await request("post", "/login", {
                "Content-type": "application/json",
            }, {
                "user_id": id,
                "password": password
            })
            console.log(data)
            localStorage.setItem("token", data.token.access_token);
            console.log("success");
            history.push("/Main");
        }
        catch (e) {
            console.log(e);
            alert("로그인에 실패했습니다.");
        }
    }

    return (
        <S.Wrapper>
            <S.Modal>
                <S.SignInWrp>
                    <S.Top>
                        <S.SignInP>Sign in</S.SignInP>
                        <S.Slogan>배이비박스 지원 서비스</S.Slogan>
                    </S.Top>
                    <S.Logo>SABY</S.Logo>
                </S.SignInWrp>
                <S.InpWrapper>
                    <S.InpDisplay>
                        <S.Email>
                            <S.UserEmail >id</S.UserEmail>
                            <S.EmailInp onChange={idChange} />
                        </S.Email>
                        <S.Password>
                            <S.UserPassword>password</S.UserPassword>
                            <S.PasswordInp type="password" onChange={pwChange} />
                        </S.Password>
                        <S.SignInBtn onClick={SigninBtn}>sign in</S.SignInBtn>
                        <S.GoSignUp>if you don't have an account <NavLink exact to="/Signup">Click here !</NavLink></S.GoSignUp>
                    </S.InpDisplay>
                </S.InpWrapper>
            </S.Modal>
        </S.Wrapper>
    )
}

export default Signin