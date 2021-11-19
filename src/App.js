import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "heeyoung",
      email: "yhy1@naver.com",
    },
    {
      id: 2,
      username: "tester",
      email: "yhy1@gmail.com",
    },
    {
      id: 3,
      username: "gooroomii",
      email: "gooroomii@gmail.com",
    },
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
