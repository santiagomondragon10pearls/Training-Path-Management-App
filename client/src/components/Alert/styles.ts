import styled, { keyframes } from 'styled-components/macro';

const AlertContainer = styled.ul`
  && {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    bottom: 40px;
    right: 50px;
    z-index: 2000;
  }
`;

export default AlertContainer;

const entrance = keyframes`
  0% {
    transform: translateX(600px);
  }
  10% {
    transform: translateX(0);
  }
  85% {
    transform: translateX(0);
    opacity: 1;
  }
  95% {
    transform: translateX(600px);
    opacity: 0.2;
  }
  100% {
    transform: translateX(600px);
    opacity: 0;
  }
`;

export const AlertItem = styled.li<{ timeOut: number }>`
  && {
    display: flex;
    align-items: center;
    list-style: none;
    background: transparent;
    border: solid 2px white;
    width: 100%;
    padding: 12px;
    padding-right: 50px;
    margin-bottom: 12px;
    position: relative;
    color: white;
    text-transform: capitalize;
    animation: ${entrance}
      ${(props: { timeOut: number }) => props.timeOut / 1000}s ease-in-out 1;

    & > svg {
      margin-right: 12px;
      font-size: 1.3rem;
    }

    &.warning {
      border-left: solid 5px #f0a500;
      & > svg path {
        fill: #f0a500;
      }

      &.invert {
        background: white;
        border-color: #f0a500;
        color: #f0a500;

        & button path {
          fill: black;
        }
      }
    }

    &.error {
      border-left: solid 5px #fc1400;
      & > svg path {
        fill: #fc1400;
      }

      &.invert {
        background: white;
        border-color: #fc1400;
        color: #fc1400;

        & button path {
          fill: black;
        }
      }
    }

    &.success {
      border-left: solid 5px #009240;
      & > svg path {
        fill: #009240;
      }

      &.invert {
        background: white;
        border-color: #009240;
        color: #009240;

        & button path {
          fill: black;
        }
      }
    }

    & button {
      height: 100%;
      width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      opacity: 0.5;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        opacity: 1;
      }

      & path {
        fill: white;
      }
    }
  }
`;
