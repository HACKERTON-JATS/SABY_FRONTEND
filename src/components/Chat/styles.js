import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`

export const ChatBox = styled.div`
    width: 60%;
    height: 600px;
    border: 1px solid #707070;
    border-radius: 20px;
    background: #fff;

`

export const UserWrp = styled.div`
    display: flex;
    align-items: flex-end;
    margin-right: 30px;
    margin-top: 20px;
    flex-direction: column;
`

export const UserChatBox = styled.p`
    margin-top: 10px;
    padding: 5px 10px 5px 10px;
    background: linear-gradient(#99A0F8,#74B8F9);
    color: #fff;
    border-radius: 30px 5px 30px 30px;
`

export const AdminWrp = styled.div`
    margin-left: 30px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const AdminChatBox = styled.p`
    margin-top: 10px;
    padding: 5px 10px 5px 10px;
    background: #F5F5F5;
    border-radius: 5px 30px 30px 30px;
`

export const TypingWrp = styled.div`
    margin-top: 10px;
    border-top: 1px solid #707070;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;

    & img{
        width: 30px;
        margin-left: 20px;
    }
`


export const TypingInp = styled.input`
    width: 85%;
    height: 35px;
    border-radius: 20px;
    border: none;
    background: #EBEBEB;
    outline: none;
    text-indent: 20px;
`