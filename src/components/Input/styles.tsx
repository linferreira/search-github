import styled from "styled-components";

export const Container = styled.div`
  height: 40px;
  border: 1px solid #999;
  border-radius: 4px;
  background-color: #fff;

  display: flex;
  align-items: center;

  color: #999;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;

  > svg {
    color: #000;
  }
`;

export const Insert = styled.input`
  width: 80%;
  padding: 10px;
  border: none;

  &:focus {
    outline: none;
  }
`;
