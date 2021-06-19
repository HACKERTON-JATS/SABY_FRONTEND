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

export const First = styled.div`
    margin-top: 40px;
`

export const Second = styled.div`

`

export const Third = styled.div`

`

export const Question = styled.span`
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    background: #dadada;
    color: #2f2f2f;

    &:hover{
        background: #555;
        color: #fff;
    }
`

export const FAnswer = styled.p`
    margin-top: 50px;
    border: 1px solid #59fcff;
    border-radius: 20px;
    padding: 20px 0px;
    margin-right: 20px;
    padding-left: 20px;
    display: ${({ visF }) => visF};
`
export const SAnswer = styled.p`
    margin-top: 50px;
    border: 1px solid #59fcff;
    border-radius: 20px;
    padding: 20px 0px;
    margin-right: 20px;
    padding-left: 20px;
    display: ${({ visS }) => visS};
`
export const TAnswer = styled.p`
    margin-top: 50px;
    border: 1px solid #59fcff;
    border-radius: 20px;
    padding: 20px 0px;
    margin-right: 20px;
    padding-left: 20px;
    display: ${({ visT }) => visT};
`

export const QWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-left: 20px;
`