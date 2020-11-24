import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  > div {
    padding: 0 30px;
    width: 100%;
    max-width: 1240px;
    flex-wrap: wrap;

    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    > div {
      flex-direction: column;
    }
  }
`;
