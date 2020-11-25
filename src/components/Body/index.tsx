import React from "react";
import * as ReactRedux from "react-redux";

import { IAppState } from "../../redux/configureStore";

import Profile from "../Profile";

import { Container } from "./styles";

interface IBodyProps {
  total: number;
  users: any[];
}

const Body: React.FC<IBodyProps> = () => {
  const usersState = ReactRedux.useSelector(
    (reducers: IAppState) => reducers.getUsers
  );

  function showMessage() {
    if (usersState.total === 0 && usersState.username !== "") {
      return <p className="not-found">User not found!</p>;
    } else if (usersState.username !== "") {
      return (
        <p>
          Found {usersState.total} results from <b>{usersState.username}</b>
        </p>
      );
    } else if (usersState.error) {
      return (
        <p className="error">
          An error ocurred in your request, please try again
        </p>
      );
    }
  }

  return (
    <Container>
      {showMessage()}

      <div>
        {usersState.users.map((item: any) => (
          <Profile
            key={item.login}
            userAvatarUrl={item.avatar_url}
            userName={item.login}
            userProfile={item.html_url}
          />
        ))}
      </div>
    </Container>
  );
};

export default Body;
