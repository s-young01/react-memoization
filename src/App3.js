import React, { useCallback, useState } from 'react';
import Box from './components/Box';

const App3 = () => {
    const [size, setSize] = useState(100);
    const [dark, setDark] = useState(false);
    const createBox = useCallback(() => {
        return {
            background: 'lightblue',
            width: `${size}px`,
            height: `${size}px`
        }
    }, [size])
    
    const style = {
        backgroundColor: dark ? '#333' : '#eee',
        color: dark ? '#eee' : '#333',
        height: '100vh'
    }
    return (
        <div style={style}>
            <input type='number'
            value={size} onChange={(e) => setSize(e.target.value)}/>
            <Box createBox={createBox}/>
            <button onClick={() => {setDark(!dark)}}>변경</button>
        </div>
    );
};

export default App3;