import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StateType } from 'CustomTypes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faBookReader,
} from '@fortawesome/free-solid-svg-icons';

import { login } from '../actions';

import LoginContainer, {
  FormContainer,
  Welcome,
  LoginForm,
  Greet,
  FormInput,
  ForgotButton,
  SubmitButton,
  RequestAccount,
} from './styles';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const { isAuthenticated, isLoading } = useSelector(
    (state: StateType) => state.auth
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuthenticated && !isLoading) {
    return <Redirect to='/' />;
  }

  return (
    <LoginContainer>
      <FormContainer>
        <Welcome>
          <FontAwesomeIcon icon={faBookReader} />
        </Welcome>
        <LoginForm>
          <Greet>
            <h2>Welcome Back</h2>
            <p>Login to see and update your progress</p>
          </Greet>
          <form className='login-form' onSubmit={handleSubmit}>
            <FormInput>
              <label htmlFor='email'>Email</label>
              <div className='input-icon-cont'>
                <input
                  autoComplete='off'
                  type='email'
                  name='email'
                  placeholder='your-email@10pearls.com'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </FormInput>
            <FormInput>
              <label htmlFor='password'>Password</label>
              <div className='input-icon-cont'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder={showPassword ? 'Your Password' : '•••••••••••'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <FontAwesomeIcon icon={faLock} />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className='toggle-password'
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <ForgotButton type='button'>Forgot Password?</ForgotButton>
            </FormInput>
            <SubmitButton type='submit'>Login</SubmitButton>
            <RequestAccount>
              Don't have an account?{' '}
              <button type='button'>Request Account</button>
            </RequestAccount>
          </form>
        </LoginForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginPage;
