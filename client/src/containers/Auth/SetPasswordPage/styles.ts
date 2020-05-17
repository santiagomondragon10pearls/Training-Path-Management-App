import styled from 'styled-components/macro';
import theme from '../../../config/theme';

const SetPasswordContainer = styled.section`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: ${theme.color.gray.light};
  }
`;

export default SetPasswordContainer;

export const FormContainer = styled.section`
  && {
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${theme.width['2/3']};
    min-height: 400px;

    background: ${theme.color.gray.gradient.main};
    border-radius: ${theme.radius.container};
    box-shadow: ${theme.shadow.container};
  }
`;

export const Welcome = styled.article`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 50%;

    & svg {
      font-size: 2.6rem;
      & path {
        fill: ${theme.color.gray.light};
      }
    }
  }
`;

export const Greet = styled.article`
  && {
    margin-bottom: ${theme.pixelSpacing(4)};

    & h2 {
      font-size: 1.7rem;
      margin-bottom: ${theme.pixelSpacing(0.5)};
    }

    & h2,
    & p {
      width: 100%;
      text-align: center;
    }
  }
`;

export const SetPasswordForm = styled.form`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${theme.width['1/2']};

    padding: ${theme.pixelSpacing(6)};

    background: ${theme.color.white};
    border-radius: ${theme.radius.container};
    box-shadow: ${theme.shadow.container};

    & .new-password-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
    }
  }
`;

export const FormInput = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    margin-bottom: ${theme.pixelSpacing(2)};

    &:last-child {
      margin: 0;
    }

    & label {
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: ${theme.pixelSpacing(0.5)};
    }

    & .input-icon-cont {
      display: flex;
      align-items: center;
      position: relative;

      width: 100%;

      & input {
        width: 100%;

        padding: ${theme.pixelSpacing(1)} ${theme.pixelSpacing(4)};

        border: solid 1px ${theme.color.gray.light};
        border-radius: ${theme.radius.smallItem};

        color: ${theme.color.gray.main};
        font-size: 0.9rem;

        &:focus {
          border-color: transparent;
          box-shadow: ${theme.shadow.input};
        }

        &::placeholder {
          opacity: 0.5;
        }
      }

      & svg {
        position: absolute;
        left: ${theme.pixelSpacing(1.5)};

        font-size: 0.7rem;

        opacity: 0.5;

        &.toggle-password {
          left: unset;
          right: ${theme.pixelSpacing(1.5)};
          width: ${theme.pixelSpacing(2)};

          font-size: 0.9rem;

          opacity: 1;

          cursor: pointer;
        }

        & path {
          fill: ${theme.color.gray.main};
        }
      }
    }
  }
`;

export const SubmitButton = styled.button`
  && {
    padding: ${theme.pixelSpacing(1)} ${theme.pixelSpacing(3)};
    margin-bottom: ${theme.pixelSpacing(2)};

    background: ${theme.color.accents.darkBlue};
    border: none;
    border-radius: ${theme.radius.smallItem};
    color: ${theme.color.white};

    font-weight: 500;

    cursor: pointer;

    &:hover {
      background: ${theme.color.accents.hoverDarkBlue};
    }
  }
`;

export const ForgotButton = styled.button`
  && {
    align-self: flex-end;

    margin-top: ${theme.pixelSpacing(0.5)};

    border: none;
    background: none;
    color: ${theme.color.accents.darkBlue};
    font-size: 0.8rem;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RequestAccount = styled.p`
  && {
    font-size: 0.8rem;

    & button {
      border: none;
      background: none;
      color: ${theme.color.accents.darkBlue};
      font-size: 0.8rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
