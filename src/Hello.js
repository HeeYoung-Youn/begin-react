import React from "react";

const Hello = ({ color, name }) => {
  // 비구조화 할당을 통해 추출 후 직접 사용 가능
  return <div style={{ color }}>안녕하세요 {name}</div>;
};

// 기본값 설정 가능
Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
