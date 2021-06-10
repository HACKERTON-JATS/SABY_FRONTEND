import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { request } from '../../axios/axios';
import * as S from './styles'

const AdminLogin = () => {
    const [code, setCode] = useState('');
    const history = useHistory();

    const onChange = (e) => {
        setCode(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        request('POST', '/admin/auth', {}, { code }, 'ADMIN')
            .then((res) => {
                localStorage.setItem('adminToken', res['access-token']);
                history.push("/AdminReservation")
            })
            .catch((err) => {
                console.log(err);
            });

    }

    return (
        <S.Wrapper>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} placeholder="코드를 입력하세요" value={code} />
                <button>제출하기</button>
            </form>
        </S.Wrapper>
    );
};

export default AdminLogin 