import React, { InputHTMLAttributes } from "react";

import { Container, Insert } from "./styles";

import { FaSearch } from "react-icons/fa";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => (
  <Container>
    <Insert {...rest} />
    <FaSearch />
  </Container>
);

export default Input;
