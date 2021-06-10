import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContentBox = styled.div`
    width: 80%;
    padding: 40px;
    margin-bottom: 40px;
    border-radius: 20px;
    background-color: white;

    & > ul, & > ol {
        margin-bottom: 30px;
    }

    & li {
        margin-bottom: 5px;
        color: #727272;
    }

    & li b {
        color: black;
    }

    & li a {
        text-decoration: none;
        color: #727272;
        font-size: 1.2rem;
        font-weight: bold;
    }

    & li a:hover {
        color: #72dbdd;
    }

    & * {
        font-family: AppleSd;
    }

`