import React, { useMemo } from 'react';

const getNum = (number) => {
    console.log('숫자가 변동되었습니다.');
    return number;
}
const getText = (text) => {
    console.log('글자가 변동되었습니다.');
    return text;
}
const ShowState = ({number, text}) => {
    const showNum = useMemo(() => getNum(number), [number]);
    const showText = useMemo(() => getText(text), [text]);
    return (
        <div>
            {showNum}<br/>
            {showText}
        </div>
    );
};

export default ShowState;