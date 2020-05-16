import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

// CONTAINERS
import LoginPage from '../containers/Auth/LoginPage';
// COMPONENTS
import Alert from '../components/Alert';

// ACTIONS
import { loadUser } from '../containers/Auth/actions';

// REDUX
import { Provider } from 'react-redux';
import store from '../store';
import { setAuthToken } from '../utils/setAuthToken';

// STYLES
import GlobalStyle from '../globalStyles';
import AppContainer from './styles';

// CHECK TOKEN BEFORE APP RUNS
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: FC = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppContainer>
          <Alert />
          <LoginPage />
        </AppContainer>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
