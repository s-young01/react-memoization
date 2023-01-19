import React, { useEffect, useMemo, useState } from 'react';

const MemoComponent = () => {
    const [number, setNunber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);
    // 원시형타입 vs 객체타입
    // const location = {
    //     country: isKorea ? '한국' : '외국'
    // }
    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국',
        }
    }, [isKorea])
    // useEffect(콜백함수, [desp]) => 마운트 / 업데이트 / 언마운트 될 때 호출할 수 있음
    useEffect(() => {
        console.log('👌 useEffect 호출됨 👍');
    }, [location])
    return (
        <div>
            <h2>좋아하는 숫자는 ?</h2>
            <input type='number' value={number}
            onChange={(e) => setNunber(e.target.value)}/>
            <h2>이동하실까요?</h2>
            <p>나라 : {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>이동하기</button>
        </div>
    );
};

export default MemoComponent;