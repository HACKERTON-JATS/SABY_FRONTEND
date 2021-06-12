import styled from "styled-components";

export const Empty = styled.div`
    width: 100%auto;
    height: 100px;
`

export const Wrapper = styled.header`
    width: 100%;
    display: flex;
    position: fixed;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0px 1px 9px #949494;
`

export const Logo = styled.div`
    margin-left: 20px;
`

export const Saby = styled.h1`
    color: #59fcff;
    font-size: 4.7rem;
    cursor: pointer;
    font-family: "AppleSd";
`

export const NavBar = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    & a{
        text-align: center;
        vertical-align: center;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
        text-decoration: none;
        color:#000;
    }
    & a:hover{
        color: #505050; 
    }
    & a:active{
        color: #222222;
    }
`
export const Login = styled.div`
    & a{
        text-align: center;
        vertical-align: center;
        padding: 11px 30px 11px 30px;
        font-weight: bold;
        border-radius: 50px;
        color: white;
        background: #59fcff;
        cursor: pointer;
        margin-top: -11px;
       text-decoration: none;
    }

    & a:hover{
        color: #fff;
    }
`