import React from "react";
import * as ReactRedux from "react-redux";

import Body from "../../components/Body";
import Header from "../../components/Header";

import { IAppState } from "../../redux/configureStore";

const Content = () => {
  const usersState = ReactRedux.useSelector(
    (reducers: IAppState) => reducers.getUsers
  );

  return (
    <>
      <Header />
      <Body
        message={usersState.message}
        users={usersState.users}
        isLoading={usersState.loading}
      />
    </>
  );
};

export default Content;
