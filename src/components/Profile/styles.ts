import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 10px;
  width: 30%;

  > a {
    text-decoration: none;
    color: #000;
    display: flex;
  }

  > a img {
    height: 100px;
    border-radius: 8px;
  }

  > a p {
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
