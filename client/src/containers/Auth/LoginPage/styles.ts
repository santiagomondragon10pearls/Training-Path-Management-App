import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const LoginContainer = styled.section`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    & form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
  }
`;

export default LoginContainer;
