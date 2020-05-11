import React, { useState } from 'react';
import './App.css';
import Signin from './components/templates/signin/Signin';
import Header from './components/organisms/header/Header';
import TodoList from './components/templates/todolist/Todolist';

const userInfo = [
  { id: 1, userId: 'angryboo', password: '111111' },
  { id: 2, userId: 'aaaa', password: '111111' },
  { id: 3, userId: 'bbbb', password: '111111' },
];

const todoBoard = [
  // { id: 1, boardName: '오늘 할 일', list: ['밥먹기', '공부하기', '잠자기'] },
  // { id: 2, boardName: '내일 할 일', list: ['책보기', '운동하기'] },
  { id: 1, userid: 1, boardName: '오늘 할 일' },
  { id: 2, userid: 1, boardName: '내일 할 일' },
];

const todoList = [
  { id: 1, boardId: 1, todo: 'JavaScript' },
  { id: 2, boardId: 1, todo: 'CSS' },
  { id: 3, boardId: 1, todo: 'HTML' },
  { id: 4, boardId: 2, todo: 'React' },
  { id: 5, boardId: 2, todo: '알고리즘' },
];

function App() {
  const [_userInfo] = useState(userInfo);
  const [isSignedin, setIsSignedin] = useState(false);
  const [signedUser, setSignedUser] = useState('Guest');
  const [board, setBoard] = useState(todoBoard);
  const [todo, setTodo] = useState(todoList);

  return (
    <div className="App">
      <Header
        signedUser={signedUser}
        isSignedin={isSignedin}
        setIsSignedin={setIsSignedin}
      />
      {isSignedin ? (
        <TodoList
          board={board}
          setBoard={setBoard}
          todo={todo}
          setTodo={setTodo}
        />
      ) : (
        <Signin
          userInfo={_userInfo}
          setSignedUser={setSignedUser}
          setIsSignedin={setIsSignedin}
        />
      )}
    </div>
  );
}

export default App;
