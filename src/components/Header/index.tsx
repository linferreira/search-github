import React, { useState } from "react";
import * as ReactRedux from "react-redux";

import Input from "../Input";
import Title from "../Title";

import { Container } from "./styles";
import { getUsersAction } from "../../redux/reducers/search/index";

const Header = () => {
  let typingTimer: any = null;
  const doneTypingInterval = 1000;

  const dispatch = ReactRedux.useDispatch();
  const [user, setUser] = useState("");

  function onkeyup() {
    clearTimeout(typingTimer);
    if (user) {
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
  }

  function onkeydown() {
    clearTimeout(typingTimer);
  }

  function doneTyping() {
    dispatch(getUsersAction(user));
  }

  function handleChange(value: string) {
    setUser(value);
  }

  return (
    <Container>
      <div>
        <Title />
        <Input
          placeholder="User"
          onChange={({ target }) => handleChange(target.value)}
          required
          onKeyUp={onkeyup}
          onKeyDown={onkeydown}
        />
      </div>
    </Container>
  );
};

export default Header;
