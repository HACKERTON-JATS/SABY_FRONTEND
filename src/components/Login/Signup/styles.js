import styled from "styled-components";
import Background from "../../../assets/EnterBackground.png";
import SignInBack from "../../../assets/SignInBack.png";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    width: 55%;
    height: 70%;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #BFBFBF;
    display: flex;
`

export const SignInWrp = styled.div`
    background: url(${SignInBack});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    border-radius: 20px 0px 0px 20px;
    align-items: center;
`

export const Top = styled.div`

`

export const SignInP = styled.p`
    color: white;
    font-weight: lighter;
    font-size: 3rem;
`

export const Slogan = styled.p`
    color: #fff;
    margin-top: 20px;
`

export const Logo = styled.h1`
    font-size: 5em;;
    color: white;
    margin-bottom: 20px;
`

export const InpWrapper = styled.div`
    width: 50%;
`

export const InpDisplay = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Name = styled.div`
    width: 100%;
    margin-left: 30%;
`

export const UserName = styled.p`
    color: #5f5f5f;
    font-size: 0.9rem;
`

export const NameInp = styled.input`
    border: none;
    width: 70%;
    height: 30px;
    border-bottom: 1px solid #5f5f5f;
    margin-top: 5px;
    outline: none;
    color: #232323;
`

export const Password = styled.div`
    margin-top: 20px;
    width: 100%;
    margin-left: 30%;
`

export const UserPassword = styled.p`
    color: #5f5f5f;
    font-size: 0.9rem;
`

export const PasswordInp = styled.input`
    border: none;
    width: 70%;
    border-bottom: 1px solid #5f5f5f;
    margin-top: 5px;
    outline: none;
    height: 30px;
`

export const GoSignUp = styled.p`
    margin-top: 20px;
    font-size: 0.9rem;
    color: #575757;
    & a{
        color: #53deff;
    }

    & a:hover{
        color: #7cf8ff;
    }

    

`


export const SignInBtn = styled.div`
    margin-top: 30px;
    & a{
        text-decoration : none;
        border-radius: 5px;
        border: none;
        background: #5bdedf;
        color: #fff;
        font-size: 1.05rem;
        padding: 10px 120px 10px 120px;
        cursor: pointer;
    }
`

export const Email = styled.div`
    width: 100%;
    margin-left: 30%;
`

export const UserEmail = styled.p`
    margin-top: 20px;
    color: #5f5f5f;
    font-size: 0.9rem;
`

export const EmailInp = styled.input`
    border: none;
    width: 70%;
    height: 30px;
    border-bottom: 1px solid #5f5f5f;
    margin-top: 5px;
    outline: none;
    color: #232323;
`