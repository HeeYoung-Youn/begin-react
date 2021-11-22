import React, { useRef, useReducer, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import useInputs from "./useInputs";
import UserList from "./UserList";

const countActiveUsers = (users) => {
  return users.filter((user) => user.active).length;
};

const initialState = {
  users: [
    {
      id: 1,
      username: "heeyoung",
      email: "yhy1@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "yhy1@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "gooroomii",
      email: "gooroomii@gmail.com",
      active: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: { id: nextId.current, username, email },
    });
    nextId.current += 1;
    reset();
  }, [email, username, reset]);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE_USER", id });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE_USER", id });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
