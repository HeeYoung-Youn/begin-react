import React, { useState } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    // 불변성을 지켜야만 입력 시 랜더링되므로
    // 스프레드 문법을 사용해 기존의 값을 가져온 후
    // 변화가 있는 부분만 덮어쓰기 해야 함
    setInputs({ ...inputs, [name]: value });
  };

  const onReset = () => {
    setInputs({ name: "", nickname: "" });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
