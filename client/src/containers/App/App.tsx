import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// CONTAINERS
import LoginPage from '../Auth/LoginPage';
import SetPasswordPage from '../Auth/SetPasswordPage';
// COMPONENTS
import Alert from '../../components/Alert';

// ACTIONS
import { loadUser } from '../Auth/actions';

// REDUX
import { Provider } from 'react-redux';
import store from '../../store';
import { setAuthToken } from '../../utils/setAuthToken';

// STYLES
import GlobalStyle from '../../globalStyles';
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
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <AppContainer>
            <Alert />
            <Switch>
              <Route path='/login' exact component={LoginPage} />
              <Route
                path='/setpassword/:token'
                exact
                component={SetPasswordPage}
              />
            </Switch>
          </AppContainer>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
