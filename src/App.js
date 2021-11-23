import React, { useReducer, useMemo, createContext } from 'react';
import produce from 'immer';
import CreateUser from './CreateUser';
import UserList from './UserList';

const countActiveUsers = users => users.filter(user => user.active).length;

const initialState = {
  users: [
    {
      id: 1,
      username: 'heeyoung',
      email: 'yhy1@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'yhy1@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'gooroomii',
      email: 'gooroomii@gmail.com',
      active: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      };
    default:
      throw new Error('Unhandled action');
  }
};

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
