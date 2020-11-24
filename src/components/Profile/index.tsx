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
    <a href={userProfile} target="_blank">
      <img src={userAvatarUrl} alt="avatar" />
    </a>
    <p>{userName}</p>
  </Container>
);

export default Profile;
