import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Link, NavLink, useHistory } from "react-router-dom";
import { request } from "../../../axios/axios";

const Signup = () => {

    const history = useHistory();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        id: "",
    });

    const [check, setCheck] = useState({
        name_ck: false,
        email_ck: false,
        id_ck: false
    });

    const { name_ck, email_ck, id_ck } = check;


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
            await request("get", `/members/email?email=${email}`, {
                "Content-Type": "application/json"
            }, {}, "USER")
            alert("사용가능한 이메일 입니다!");
            setCheck({
                ...check,
                email_ck: true
            });
        }
        catch (e) {
            console.log(e);
            alert("사용중인 이메일 입니다!");
        }
    }

    const nameOverlap = async () => {
        console.log(name)

        ckName();

        try {
            await request("get", `/members/nickname?nickname=${name}`, {
                "Content-Type": "application/json",
            }, {}, "USER")
            alert("사용가능한 닉네임입니다!");
            setCheck({
                ...check,
                name_ck: true
            });
        }
        catch (e) {
            console.log(e);
            alert("사용중인 닉네임 입니다!");
        }
    }

    const idOverlap = async () => {
        console.log(id);
        try {
            await request("get", `/members/id?user_id=${id}`, {
                "Content-Type": "application/json"
            }, {}, "USER")
            alert("사용가능한 아이디 입니다!");
            setCheck({
                ...check,
                id_ck: true
            })
        } catch (e) {
            console.log(e);
            alert("사용중인 아이디 입니다")
        }
    }

    const emailCk = async (e) => {
        try {
            await request("post", "/sms-certification/sends", {
                "Content-type": "application/json"
            }, {
                "email": email
            }, "USER")
        }
        catch {
            console.log("err");
        }
    }


    const SignupBtn = async (e) => {
        console.log(name_ck)

        if (!(toString(name_ck) || toString(id_ck) || toString(email_ck))) {
            alert("중복체크를 완료해 주세요!");
            return;
        }

        try {
            await request("post", "/signup", {
                "Content-type": "application/json",
            }, {
                "user_id": id,
                "email": email,
                "password": password,
                "nickname": name
            }, "USER")
            alert("회원가입에 성공하였습니다!");
            history.push("/signin");
        }
        catch (e) {
            alert("fail to signup");
            console.log(e)
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
                        <S.Id>
                            <S.UserId>id</S.UserId>
                            <S.Check>
                                <S.IdInp onChange={idChange} value={id} />
                                <button onClick={idOverlap}>중복 확인</button>
                            </S.Check>
                        </S.Id>
                        <S.Email>
                            <S.UserEmail>email</S.UserEmail>
                            <S.Check>
                                <S.EmailInp onChange={emailChange} value={email} />
                                <button onClick={emailOverlap}>중복 확인</button>
                            </S.Check>
                        </S.Email>
                        <S.Email>
                            <S.UserEmail>이메일 인증 코드</S.UserEmail>
                            <S.Check>
                                <S.EmailInp></S.EmailInp>
                                <S.SendCode onClick={emailCk}>이메일 인증</S.SendCode>
                            </S.Check>
                        </S.Email>
                        <S.Name>
                            <S.UserName>username</S.UserName>
                            <S.Check>
                                <S.NameInp onChange={nameChange} value={name} />
                                <button onClick={nameOverlap}>중복 확인</button>
                            </S.Check>
                        </S.Name>
                        <S.Password>
                            <S.UserPassword>password</S.UserPassword>
                            <S.PasswordInp type="password" onChange={pwChange} value={password} />
                        </S.Password>
                        <S.SignInBtn onClick={SignupBtn} >sign up</S.SignInBtn>
                        <S.GoSignUp >if you have an account <Link exact to="/Signin">Click here !</Link></S.GoSignUp>
                    </S.InpDisplay>
                </S.InpWrapper>
            </S.Modal>
        </S.Wrapper >
    )
}

export default Signup;