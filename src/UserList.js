import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
};

const UserList = () => {
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

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
