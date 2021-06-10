import styled from "styled-components";
import Background from "../../assets/EnterBackground.png";

export const BackWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 7rem;
    color: #59fcff;
    font-family: "AppleSd";
    letter-spacing: 5px;
`

export const Slogan = styled.p`
    text-align: center;
    padding: 20px 0px 40px 0px;
    font-weight: 600;
`

export const ChangePage = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const InformationWrp = styled.div`

`

export const SeeInf = styled.p`
    margin-left: 10px;
    margin-bottom: 10px;
    color: white;
    font-size: 17px;
    font-weight: bold;
    transition: 0.6s all;
`

export const HiddenInf = styled.p`
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
    transform: translateY(-30px);
    opacity: 0;
    transition: 0.6s all;
`

export const InfShadow = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 20px 0px 0px 20px;
    position: absolute;
    background: #696969;
    opacity: 65%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:hover ${SeeInf} {
        transform: translateY(-30px);    
    }
    &:hover ${HiddenInf} {
        opacity: 1;
    }
`

export const BBInformation = styled.img`
    width: 400px;
`


export const MainPageWrp = styled.div`

`

export const SeeHome = styled.p`
    margin-left: 10px;
    margin-bottom: 10px;
    color: white;
    font-size: 17px;
    font-weight: bold;
    transition: 0.6s all;
`

export const HiddenHome = styled.p`
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
    transform: translateY(-30px);
    opacity: 0;
    transition: 0.6s all;
`

export const MainShadow = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 0px 20px 20px 0px;
    position: absolute;
    background: #696969;
    opacity: 65%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:hover ${SeeHome} {
        transform: translateY(-30px);    
    }
    &:hover ${HiddenHome} {
        opacity: 1;
    }
`

export const GoMain = styled.img`
    width: 400px;
`

