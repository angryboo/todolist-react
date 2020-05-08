import React, { useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './SigninInputSet.css';

import SigninText from '../../atoms/signin-text/SigninText';
import SigninInput from '../../atoms/signin-input/SigninInput';

const st = classNames.bind(style);

const SigninInputSet = ({ inputType, event }) => {
  const [_type] = useState(inputType);
  return (
    <div className={st('signin-inputset')}>
      <SigninText inputType={_type} />
      <SigninInput inputType={_type} event={event} />
    </div>
  );
};
SigninInputSet.defaultProps = {
  inputType: 'Plase Set input type!!!!',
  event: () => {},
};
SigninInputSet.propTypes = {
  inputType: propTypes.string,
  event: propTypes.func,
};
export default SigninInputSet;
