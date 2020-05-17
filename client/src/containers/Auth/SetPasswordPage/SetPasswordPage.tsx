import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, match } from 'react-router-dom';
import { StateType } from 'CustomTypes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faBookReader,
} from '@fortawesome/free-solid-svg-icons';

import { setNewPassword } from '../actions';
import { setAlert } from '../../../alert-action';

import SetPasswordContainer, {
  SetPasswordForm,
  Greet,
  FormInput,
  SubmitButton,
} from './styles';

interface ComponentPropTypes {
  match: match<{ token: string }>;
}

const SetPasswordPage: FC<ComponentPropTypes> = ({ match }) => {
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const dispatch = useDispatch();

  const { isAuthenticated, isLoading } = useSelector(
    (state: StateType) => state.auth
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({ password, confirmation });
    if (password.length < 6) {
      dispatch(setAlert('Password must be at least 6 digits long', 'error'));
    } else if (password.length > 30) {
      dispatch(
        setAlert('Password must not be more than 30 digits long', 'error')
      );
    } else if (password !== confirmation) {
      dispatch(setAlert('Password must match', 'error'));
    } else {
      dispatch(setNewPassword(password, confirmation, match.params.token));
    }
    // dispatch(login(email, password));
  };

  if (isAuthenticated && !isLoading) {
    return <Redirect to='/' />;
  }

  return (
    <SetPasswordContainer>
      <SetPasswordForm>
        <Greet>
          <h2>Set New Password</h2>
          <p>Set here a new password to be able to track your progress</p>
        </Greet>
        <form className='new-password-form' onSubmit={handleSubmit}>
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
          </FormInput>
          <FormInput>
            <label htmlFor='confirmation'>Confirm Password</label>
            <div className='input-icon-cont'>
              <input
                type={showConfirmation ? 'text' : 'password'}
                name='confirmation'
                placeholder={
                  showConfirmation ? 'Confrim Password' : '•••••••••••'
                }
                value={confirmation}
                onChange={e => setConfirmation(e.target.value)}
              />
              <FontAwesomeIcon icon={faLock} />
              <FontAwesomeIcon
                icon={showConfirmation ? faEyeSlash : faEye}
                className='toggle-password'
                onClick={() => setShowConfirmation(!showConfirmation)}
              />
            </div>
          </FormInput>
          <SubmitButton type='submit'>Set Password</SubmitButton>
        </form>
      </SetPasswordForm>
    </SetPasswordContainer>
  );
};

export default SetPasswordPage;
