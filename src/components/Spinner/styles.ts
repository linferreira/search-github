import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 2px solid #46af36;
  border-top: 0.2em solid #b8db92;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 0.6s linear infinite;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
