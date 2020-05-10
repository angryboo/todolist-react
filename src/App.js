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
  { id: 1, boardName: '오늘 할 일', list: ['밥먹기', '공부하기', '잠자기'] },
  { id: 2, boardName: '내일 할 일', list: ['책보기', '운동하기'] },
];

function App() {
  const [_userInfo] = useState(userInfo);
  const [isSignedin, setIsSignedin] = useState(false);
  const [signedUser, setSignedUser] = useState('Guest');
  const [board, setBoard] = useState(todoBoard);

  return (
    <div className="App">
      <Header
        signedUser={signedUser}
        isSignedin={isSignedin}
        setIsSignedin={setIsSignedin}
      />
      {isSignedin ? (
        <TodoList board={board} setBoard={setBoard} />
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
