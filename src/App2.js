import React, { useCallback, useState } from 'react';
import List from './components/List';

const App2 = () => {
    // 상태 관리하기
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    // 스타일 변수
    const theme = {
        backgroundColor: dark ? '#333' : '#eee',
        color: dark ? '#eee' : '#333',
        height: '100vh'
    }
    const getItems = useCallback(() => {
        // 아래의 배열은 [1, 2, 3] 과 같다
        // (상태 업데이트 될 때마다 배열 안의 값이 변경됨!)
        return [number, number + 1, number + 2];
    }, [number])
        
    // useCallback을 useMemo로 바꾸기
    // const getItems = useMemo(() => {
    //     (value) => {
    //         return [number, number + 1, number + 2];
    //     } 
    // }, [number])
    return (
        <div style={theme}>
            <input type='number' value={number}
            onChange={(e) => setNumber(e.target.value*1)}/>
            <button onClick={() => {setDark(!dark)}}>태마변경</button>
            <List getItems={getItems}/>
        </div>
    );
};

export default App2;