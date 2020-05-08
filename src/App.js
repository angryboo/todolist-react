import React, { useState } from 'react';
import './App.css';
import Signin from './components/templates/signin/Signin';
import Header from './components/organisms/header/Header';

const userInfo = [{ id: 1, userId: 'angryboo', password: '111111' }];
// let isSignin = false;

function App() {
  const [_userInfo] = useState(userInfo);
  const [isSignin, setIsSignin] = useState(false);
  const [signUser, setSignUser] = useState('Guest');

  const doSignin = (status, id) => {
    setIsSignin(status);
    if (isSignin) setSignUser(() => id);
    console.log(isSignin, signUser);
  };

  return (
    <div className="App">
      <Header />
      <Signin userInfo={_userInfo} event={doSignin} />
    </div>
  );
}

export default App;
