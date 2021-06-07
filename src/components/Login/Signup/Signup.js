import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { NavLink, useHistory } from "react-router-dom";
import { request } from "../../../axios/axios";

const Signup = () => {

    const hostory = useHistory();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        id: ""
    });


    const { name, email, password, id } = data;

    const nameChange = (e) => {
        setData({
            ...data,
            name: e.target.value
        });
    }

    const emailChange = (e) => {
        setData({
            ...data,
            email: e.target.value
        });
    }

    const pwChange = (e) => {
        setData({
            ...data,
            password: e.target.value
        });
    }

    const idChange = (e) => {
        setData({
            ...data,
            id: e.target.value
        });
    }

    const ckName = () => {
        if (name == '') {
            alert("type name!");
            return false;
        }
        for (let i = 0; i < name.length; i++) {
            if (name[i] == ' ') {
                alert("remove blank");
                return false;
            }
        }
        return true;
    }

    const emailOverlap = async (e) => {
        try {
            await request("get", "/members/email", {
                "Content-Type": "application/json"
            }, {
                "email": email
            })
            alert("사용가능한 이메일 입니다!");
        }
        catch {
            alert("fail");
        }
    }

    const nameOverlap = (e) => {
        console.log(name)
        try {
            request("get", "/members/nickname", {
                "Content-Type": "application/json",

            }, {
                "nickname": name
            })
            alert("사용가능한 닉네임입니다!");
        }
        catch {
            alert("닉네임이 중복되었습니다");
        }
    }

    const idOverlap = (e) => {
        console.log(id);
        try {
            request("get", "/members/id?id=id", {
                "Content-Type": "application/json"
            }, {
                "user_id": id
            })
            alert("사용가능한 아이디 입니다!");
        } catch {
            console.log("id is overlap")
        }
    }


    const SignupBtn = async (e) => {
        try {
            await request("post", "/signup", {
                "Content-type": "application/json",
            }, {
                "user_id": id,
                "email": email,
                "password": password,
                "nickname": name
            })
            alert("회원가입에 성공하였습니다!");
        }
        catch {
            alert("fail to signup");
        }
    }

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
                            <S.Check>
                                <S.NameInp onChange={nameChange} value={name} />
                                <button onClick={nameOverlap}>중복 확인</button>
                            </S.Check>
                        </S.Name>
                        <S.Email>
                            <S.UserEmail>email</S.UserEmail>
                            <S.Check>
                                <S.EmailInp onChange={emailChange} value={email} />
                                <button onClick={emailOverlap}>중복 확인</button>
                            </S.Check>
                        </S.Email>
                        <S.Password>
                            <S.UserPassword>password</S.UserPassword>
                            <S.PasswordInp onChange={pwChange} value={password} />
                        </S.Password>
                        <S.Id>
                            <S.UserId>id</S.UserId>
                            <S.Check>
                                <S.IdInp onChange={idChange} value={id} />
                                <button onClick={idOverlap}>중복 확인</button>
                            </S.Check>
                        </S.Id>
                        <S.SignInBtn onClick={SignupBtn} >sign up</S.SignInBtn>
                        <S.GoSignUp >if you have an account <NavLink exact to="/Signin">Click here !</NavLink></S.GoSignUp>
                    </S.InpDisplay>
                </S.InpWrapper>
            </S.Modal>
        </S.Wrapper >
    )
}

export default Signup;