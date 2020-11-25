import React from "react";

import { Container } from "./styles";

interface IProfileProps {
  userAvatarUrl: string;
  userName: string;
  userProfile: string;
}

const Profile: React.FC<IProfileProps> = ({
  userAvatarUrl,
  userName,
  userProfile,
}) => (
  <Container>
    <a href={userProfile} target="blank">
      <img
        src={userAvatarUrl}
        alt={`${userName} - profile avatar`}
        title={`${userName} - profile avatar`}
      />
      <p>{userName}</p>
    </a>
  </Container>
);

export default Profile;
