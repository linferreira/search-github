import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 30%;

  > a img {
    height: 100px;
    border-radius: 8px;
  }

  > p {
    margin-top: 10px;
    margin-left: 10px;
    word-break: break-all;
  }

  @media (max-width: 800px) {
    width: 45%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
