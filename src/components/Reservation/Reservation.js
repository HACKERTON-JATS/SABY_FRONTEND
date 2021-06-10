import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Header from "../Main/Header/Header";
import Time from "./Content/Time";
import Date from "./Content/Month";
import WriteInfo from "./WriteInfo/WriteInfo";

const Reservation = () => {



    const [pos, setPos] = useState(0);
    useEffect(() => {
        console.log(data)
    }, [pos])
    const [data, setData] = useState({
        time: "",
        birth_date: "",
        kid_name: "",
        vaccination: "",
        fetus_name: "",
        request: "",
        caution: "",
    })

    const { time, birth_date, kid_name, vaccination, fetus_name, request, caution } = data;

    return (
        <>
            <Header />
            <S.Wrapper>
                {pos === 0 ? <Date data={data} setData={setData} setPos={setPos} /> :
                    pos === 1 ? <Time data={data} setData={setData} setPos={setPos} />
                        : <WriteInfo data={data} setData={setData} />
                }


            </S.Wrapper>
        </>
    )
}

export default Reservation;