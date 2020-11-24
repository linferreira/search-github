import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  > p {
    margin-top: 8px;
    margin-bottom: 0;

    > span {
      color: #46af36;
    }
  }
`;
