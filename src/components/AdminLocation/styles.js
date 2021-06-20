import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Main = styled.div`
    background-color: #f4f5f4;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > div {
        width: 100%;
        height: 500px;
    }

    & > div > div  {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        position: relative !important;
        height: min-content;

    }

    & > div > div > div {
        margin: 0 auto;
    }
`

export const MapText = styled.span`
    font-size: 1.5rem;
`