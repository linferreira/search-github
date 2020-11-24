import React from "react";

import Profile from "../Profile";

import { Container } from "./styles";

const people = [
  {
    userAvatarUrl: "https://avatars2.githubusercontent.com/u/22802370?v=4",
    userName: "Linferreira",
  },
  {
    userAvatarUrl: "https://avatars2.githubusercontent.com/u/40777007?v=4",
    userName: "Stheffane",
  },
  {
    userAvatarUrl: "https://avatars3.githubusercontent.com/u/18310307?v=4",
    userName: "DDLibaneo",
  },
];

const Body = () => {
  return (
    <Container>
      {people.map((item) => (
        <Profile
          key={item.userName}
          userAvatarUrl={item.userAvatarUrl}
          userName={item.userName}
        />
      ))}
    </Container>
  );
};

export default Body;
