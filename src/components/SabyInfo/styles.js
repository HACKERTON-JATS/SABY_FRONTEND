import styled from "styled-components";

export const Wrapper = styled.section`

`

export const Title = styled.p`
    text-align: center;
    font-size: 2.5rem;
    margin-top: 40px;

    & i{
        font-size:2rem;
        color: #59fcff;
    }
`

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    & a{
        text-decoration: none;
        color: #000;
        padding: 10px 40px;
        border: 1px solid #bbbbbb;
        border-radius: 30px;
    }

    & a:hover{
        background: #7EDBDD;
        color: #fff;
        border: 1px solid #fff;
    }

    & .selected{
        background: #7EDBDD;
        color: #fff;
        border: 1px solid #fff;
    }
`

export const Content = styled.div`

`