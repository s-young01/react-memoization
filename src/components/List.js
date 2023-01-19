import React, { useEffect, useState } from 'react';

const List = ({getItems}) => {
    // 배열 상태관리 (초기 값은 빈 배열을 담아줌)
    const [items, setItems] = useState([]);
    // 마운트, 리렌더링 될 때 호출되는 함수
    useEffect(() => {
        setItems(getItems()); // items의 상태에 getItems()배열을 담아 업데이트함
        console.log('숫자가 변동되었습니다.');
    }, [getItems])

    
    return (
        <div>
            {items.map((item, index) => <div key={index}>{item}</div>)}
            {/* [div key={0}<div>1</div>
                key={1}<div>2</div>
                key={2}<div>3</div>]  */}
        </div>
    );
};

export default List;