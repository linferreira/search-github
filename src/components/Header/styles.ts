import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: #f4f4f4;
  border: 2px solid #999;

  padding: 25px;

  > div {
    width: 100%;
    max-width: 1240px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 800px) {
    width: 100%;

    > div {
      width: auto;
      flex-direction: column;
    }
  }
`;
