import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  > p {
    margin-top: 8px;
    margin-bottom: 0;
    text-align: center;

    > span {
      color: #46af36;
    }
  }

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;

    > h1 {
      font-size: 26px;

      > svg {
        margin-right: 10px;
      }
    }

    > p {
      font-size: 14px;
      margin-bottom: 15px;
    }
  }
`;
