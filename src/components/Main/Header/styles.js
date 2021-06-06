import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
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
    padding: 11px 30px 11px 30px;
    font-weight: bold;
    border-radius: 50px;
    color: white;
    background: #59fcff;
    cursor: pointer;
    text-decoration: none;
    }
`

export const Chat = styled.span`
    cursor: pointer;
    font-weight: bold;
    &:hover{
       color: #9a9a9a; 
    }
`

export const Reservation = styled.span`
    font-weight: bold;
    cursor: pointer;
    &:hover{
       color: #9a9a9a; 
    }
`

export const Location = styled.span`
    font-weight: bold;
    cursor: pointer;
    &:hover{
       color: #9a9a9a; 
    }
`

export const Information = styled.span`
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
    &:hover{
       color: #9a9a9a; 
    }
`

