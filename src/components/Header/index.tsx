import React, { useState } from "react";

import Input from "../Input";
import Title from "../Title";

import { Container } from "./styles";

const Header = () => {
  const [user, setUser] = useState("");

  return (
    <Container>
      <div>
        <Title />
        <Input
          placeholder="User"
          onChange={({ target }) => setUser(target.value)}
          required
        />
      </div>
    </Container>
  );
};

export default Header;
