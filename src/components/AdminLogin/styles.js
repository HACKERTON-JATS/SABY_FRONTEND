import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & form {
        display: flex;
        gap: 10px;
    }

    & input {
        width: 300px;
        height: 30px;
    }

    & button {
        width: 100px;   
    }
`

