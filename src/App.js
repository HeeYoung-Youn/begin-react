import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello
        name="react"
        color="red"
        isSpecial
        // 값 생략한 경우 true로 props를 전달한 것과 동일
      />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
