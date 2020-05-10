import React, { useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './SigninForm.css';
import SigninInputSet from '../../molcules/signin-input-set/SigninInputSet';
import SigninTitle from '../../atoms/signin-title/SigninTitle';
import SigninButton from '../../atoms/signin-button/SigninButton';

const st = classNames.bind(style);

const SigninForm = ({ userInfo, setSignedUser, setIsSignedin }) => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const macthUserInfo = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    userInfo.some(
      ({ userId, password }) => userId === idValue && password === pwValue,
    );

  const submitBtn = (e) => {
    e.preventDefault();
    if (macthUserInfo()) {
      setSignedUser(idValue);
      setIsSignedin(true);
    }
  };

  return (
    <form className={st('signin-form')} onSubmit={submitBtn}>
      <SigninTitle />
      <SigninInputSet inputType="ID" event={setIdValue} />
      <SigninInputSet inputType="password" event={setPwValue} />
      <div style={{ marginTop: '40px' }}>
        <SigninButton />
      </div>
    </form>
  );
};

SigninForm.defaultProps = {
  userInfo: [],
  setSignedUser: () => {},
  setIsSignedin: () => {},
};
SigninForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userInfo: propTypes.array,
  setSignedUser: propTypes.func,
  setIsSignedin: propTypes.func,
};

export default SigninForm;
