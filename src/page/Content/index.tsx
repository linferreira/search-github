import React from "react";
import * as ReactRedux from "react-redux";

import Body from "../../components/Body";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";

import { IAppState } from "../../redux/configureStore";

const Content = () => {
  const usersState = ReactRedux.useSelector(
    (reducers: IAppState) => reducers.getUsers
  );

  if (usersState.loading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <Body message={usersState.message} users={usersState.users} />
    </>
  );
};

export default Content;
