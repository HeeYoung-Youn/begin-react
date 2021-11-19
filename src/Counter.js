import React, { useState } from "react";

const Counter = () => {
  // useState를 통해 값 관리
  const [number, setNumber] = useState(0);

  // 함수형 업데이트를 통한 성능 최적화와 관련
  const onIncrease = () => setNumber((prevNumber) => prevNumber + 1);
  const onDecrease = () => setNumber(number - 1);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      {/* 랜더링 되었을 떄 호출하고 싶은게 아닌, 클릭 되었을 떄
      호출하고 싶은 경우이기 때문에 onIncrease()와 같이
      함수를 호출하지 않는다 */}
    </div>
  );
};

export default Counter;
