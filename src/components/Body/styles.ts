import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  > p {
    background-color: #f7f7ad;
    align-self: center;
    margin-bottom: 30px;
  }

  .not-found {
    background-color: transparent;
    font-size: 24px;
    color: #e07408;
    font-weight: 600;
  }

  .error {
    background-color: transparent;
    font-size: 24px;
    color: #e44c4e;
  }

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
