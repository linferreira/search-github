import React from "react";

import Profile from "../Profile";

import { Container } from "./styles";

const people = [
  {
    userAvatarUrl: "https://avatars2.githubusercontent.com/u/22802370?v=4",
    userName: "Linferreira",
    userProfile: "https://github.com/Linferreira",
  },
  {
    userAvatarUrl: "https://avatars2.githubusercontent.com/u/40777007?v=4",
    userName: "Stheffane",
    userProfile: "https://github.com/Stheffane",
  },
  {
    userAvatarUrl: "https://avatars3.githubusercontent.com/u/18310307?v=4",
    userName: "DDLibaneo",
    userProfile: "https://github.com/DDLibaneo",
  },
];

const Body = () => {
  return (
    <Container>
      <div>
        {people.map((item) => (
          <Profile
            key={item.userName}
            userAvatarUrl={item.userAvatarUrl}
            userName={item.userName}
            userProfile={item.userProfile}
          />
        ))}
      </div>
    </Container>
  );
};

export default Body;
