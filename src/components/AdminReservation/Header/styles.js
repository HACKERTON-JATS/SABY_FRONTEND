import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
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
    font-family: "Apple";
`

export const Subtitle = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
`

export const Span = styled.span`
    color: #575757;
    &:nth-of-type(1) {
        font-size: 3rem;
    }
    &:nth-of-type(2) {
        margin-left: 10px;
        font-size: 2rem;
    }
`