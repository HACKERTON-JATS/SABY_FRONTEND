import styled from 'styled-components';
import Background from "../../assets/EnterBackground.png";
import SignInBack from "../../assets/SignInBack.png";

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
    width: 100%;
    border-radius: 20px 0px 0px 20px;
    align-items: center;

    & form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    & input {
        box-sizing: border-box;
        width: 70%;
        height: 50px;
        border: none;
        border-radius: 10px;
        text-indent: 10px;
    }

    & button {
        box-sizing: border-box;
        width: 20%;
        height: 40px;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        color: black;
        background-color: white;
    }
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
    text-align: center;
`

export const Logo = styled.h1`
    font-size: 5em;;
    color: white;
    margin-bottom: 20px;
`