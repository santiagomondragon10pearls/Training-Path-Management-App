import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StateType } from 'CustomTypes';

import { login } from '../actions';

import LoginContainer from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const dispatch = useDispatch();

  const { isAuthenticated, isLoading } = useSelector(
    (state: StateType) => state.auth
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuthenticated && !isLoading) {
    return <Redirect to='/' />;
  }

  return (
    <LoginContainer>
      <form className='register-form' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email or Username'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={e => setPasword(e.target.value)}
        />
        <button type='submit'>Ingresar</button>
      </form>
    </LoginContainer>
  );
};

export default Login;
