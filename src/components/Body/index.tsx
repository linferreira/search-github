import React from "react";

import Profile from "../Profile";
import Spinner from "../Spinner";

import { Container } from "./styles";

interface IBodyProps {
  users: any[];
  message: string;
  isLoading: boolean;
}

const Body: React.FC<IBodyProps> = ({ users, message, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      {message && <p>{message}</p>}

      <div>
        {users &&
          users.map((item: any) => (
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
