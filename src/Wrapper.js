import React from "react";

const Wrapper = ({ children }) => {
  // Children을 통해 Wrapper 태그 사이에 자식 컴포넌트 전달 가능
  const style = {
    border: "2px solid black",
    padding: 16,
  };

  return <div style={style}>{children}</div>;
};

export default Wrapper;
