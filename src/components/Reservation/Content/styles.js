import styled from "styled-components";

export const TimeWrapper = styled.section`

`

export const DateWrapper = styled.section`
    margin-top: 150px;
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: start;
    justify-content: center;
`

export const MonthInpWrp = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 60px;
`

export const MonthWrp = styled.div`
    display: flex;
    align-items: flex-end;
`

export const MonthInp = styled.input`
    text-indent: 80px;
    border: none;    
    height: 180px;
    width: 180px;
    outline: none;
    font-size: 10rem;
    background: rgb(245, 245, 245);
`

export const Underline = styled.div`
    width: 130%;
    height: 4px;
    border: 1px solid #707070;
    border-radius: 3px;
`

export const Month = styled.p`
    font-size: 10rem;
`

export const DateInpWrp = styled.div`
    margin-right: 60px;
`

export const DateWrp = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 200px;
`

export const DateInp = styled.input`
    text-indent: 80px;
    background: rgb(245, 245, 245);
    border: none;
    border: none;    
    height: 180px;
    width: 180px;
    outline: none;
    font-size: 10rem;
`

export const DateP = styled.p`
    font-size: 10rem;
`

export const Next = styled.div`
    width: 10%;
    height: 40px;
    background: #7EDBDD;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 40px;
    cursor: pointer;
    right: 40px;

    & a{
        text-decoration: none;
        color: #fff;
        font-size: 1.5rem;
    }
    & img{
        margin-left: 5px;
        width: 16px;
    }
`

export const Date = styled.p`
    font-size: 3rem;
    margin-left: 30px;
    margin-top: 10px;
`

export const ExactTimeWrp = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    & div{
        width: 65%;
        display: grid;
        grid: '. . .';
    }
`

export const HourWrapper = styled.div`
    width: 85%;
    height: 45px;
    margin: 15px;
    border: 1px solid #7EDBDD;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    justify-self: center;
    font-size: 1.5rem;

    &:hover{
        background: #7EDBDD;
        color: #fff;
    }
    &:active{
        background: #7EDBDD;
        color: #fff;
    }
    
`

export const WriteBabyInfo = styled.div`
    width: 10%;
    height: 40px;
    background: #7EDBDD;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 40px;
    right: 40px;
    cursor: pointer;

    & a{
        text-decoration: none;
        color: #fff;
        font-size: 1.5rem;
    }
    & img{
        margin-left: 5px;
        width: 16px;
    }
`