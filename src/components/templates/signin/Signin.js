import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Signin.css';
import SigninForm from '../../organisms/SigninForm/SigninForm';

const st = classNames.bind(style);

const Signin = ({ userInfo, setSignedUser, setIsSignedin }) => (
  <div className={st('signin')}>
    <SigninForm
      userInfo={userInfo}
      setSignedUser={setSignedUser}
      setIsSignedin={setIsSignedin}
    />
  </div>
);

Signin.defaultProps = {
  userInfo: [],
  setSignedUser: () => {},
  setIsSignedin: () => {},
};
Signin.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userInfo: propTypes.array,
  setSignedUser: propTypes.func,
  setIsSignedin: propTypes.func,
};

export default Signin;
