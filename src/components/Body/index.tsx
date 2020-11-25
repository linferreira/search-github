import React from "react";

import Profile from "../Profile";

import { Container } from "./styles";

interface IBodyProps {
  users: any[];
  message: string;
}

const Body: React.FC<IBodyProps> = ({ users, message }) => (
  <Container>
    <p> {message} </p>

    <div>
      {users.map((item: any) => (
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

export default Body;
