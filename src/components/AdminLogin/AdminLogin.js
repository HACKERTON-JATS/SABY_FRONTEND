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
                history.push("/AdminReservation");
            })
            .catch((err) => {
                alert("코드가 일치하지 않습니다.");    
            });

    }

    return (
        <S.Wrapper>
            <S.Modal>
                <S.SignInWrp>
                    <S.Top>
                        <S.SignInP>Admin Sign in</S.SignInP>
                        <S.Slogan>베이비박스 지원 서비스</S.Slogan>
                    </S.Top>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} placeholder="코드를 입력하세요" value={code} />
                        <button>제출하기</button>
                    </form>
                    <S.Logo>SABY</S.Logo>
                </S.SignInWrp>
            </S.Modal>
        </S.Wrapper>
    );
};

export default AdminLogin;