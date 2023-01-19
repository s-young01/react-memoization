// import { useState } from 'react';
import './App.css';
// import Calculator from './components/Calculator';
import MemoComponent from './components/MemoComponent';
// import ShowState from './components/ShowState';

function App() {
  // 상태관리
  // const [number, setNunber] = useState(0);
  // const [text, setText] = useState("");
  // 클릭했을 때 number값 1씩 올라가는 상태 업데이트 
  // const increaseNum = () => {
  //   setNunber(number + 1);
  // }
  // 클릭했을 때 number값 1씩 내려가는 상태 업데이트
  // const decreaseNum = () => {
  //   setNunber(number - 1);
  // }

  // const onChange = (e) => {
  //   setText(e.target.value)
  // }
  return (
    <div className="App">
      {/* <div>
        <button onClick={increaseNum}>+1</button>
        <button onClick={decreaseNum}>-1</button>
        <input value={text} onChange={onChange}
        type='text' placeholder='lastname' />
      </div>
      <ShowState number={number} text={text}/>
      <Calculator/> */}
      <MemoComponent/>
    </div>
  );
}

export default App;
