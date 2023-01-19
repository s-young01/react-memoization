import React, { useMemo, useState } from 'react';

const hardCalculate = (number) => {
    console.log('복잡한 계산');
    // 마치 복잡한 계산인 것 처럼 보이게 하는 의미없는 for문이다.
    for(let i = 0; i < 1000000000; i++) {
        return number + 100000;
    }
}
const easyCalculate = (number) => {
    console.log('단순한 계산');
    return number + 1;
}

const Calculator = () => {
    const [number1, setNunber1] = useState(1);
    const [number2, setNunber2] = useState(1);
    const hardSum = useMemo(() => hardCalculate(number1), [number1]);
    const easySum = useMemo(() => easyCalculate(number2), [number2]);
    return (
        <div>
            <h3>복잡한 계산기</h3>
            <input type='number' 
            value={number1}
            // input의 value값에 *1을 해서 Number타입으로 자동형변환 해주었다
            onChange={(e) => setNunber1(e.target.value*1)}/>
            <span>+ 100000 = {hardSum}</span>

            <h3>단순한 계산기</h3>
            <input type='number' 
            value={number2}
            onChange={(e) => setNunber2(e.target.value*1)}/>
            <span>+ 1 = {easySum}</span>
        </div>
    );
};

export default Calculator;
