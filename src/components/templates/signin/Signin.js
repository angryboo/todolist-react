import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Signin.css';
import SigninForm from '../../organisms/SigninForm/SigninForm';

const st = classNames.bind(style);

const Signin = ({ userInfo, event }) => (
  <div className={st('signin')}>
    <SigninForm userInfo={userInfo} event={event} />
  </div>
);

Signin.defaultProps = {
  userInfo: [],
  event: () => {},
};
Signin.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userInfo: propTypes.array,
  event: propTypes.func,
};

export default Signin;
