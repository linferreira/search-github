import React, { useState } from "react";
import * as ReactRedux from "react-redux";

import Input from "../Input";
import Title from "../Title";

import { Container } from "./styles";
import { getUsersAction } from "../../redux/reducers/search/index";

const Header = () => {
  const [user, setUser] = useState("");

  let typingTimer: any = null;

  const doneTypingInterval = 1000;

  const dispatch = ReactRedux.useDispatch();

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
          placeholder="Search"
          onChange={({ target }) => handleChange(target.value)}
          required
          onKeyUp={onkeyup}
          onKeyDown={onkeydown}
          autoFocus
        />
      </div>
    </Container>
  );
};

export default Header;
