import React from "react";

const Hello = ({ color, name, isSpecial }) => {
  return (
    // 조건부 랜더링
    <div style={{ color }}>
      {/* 특정 조건일 떄에만 보여줘야 하는 경우에는 &&, 
      조건에 따라 랜더링 해야 하는 내용이 다른 경우에는 삼항연산자 사용 */}
      {isSpecial && <b>*</b>}안녕하세요 {name}
    </div>
  );
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
