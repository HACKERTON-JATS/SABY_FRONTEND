import styled from "styled-components";
import Background from "../../assets/EnterBackground.png";
import SignUpBack from "../../assets/SignUpBack.png";

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

export const SignUp = styled.div`
    background: url(${SignUpBack});
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

export const SignUpP = styled.p`
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

`