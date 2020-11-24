import React from "react";

import { Container } from "./styles";

interface IProfileProps {
  userAvatarUrl: string;
  userName: string;
}

const Profile: React.FC<IProfileProps> = ({ userAvatarUrl, userName }) => (
  <Container>
    <img src={userAvatarUrl} alt="avatar" />
  </Container>
);

export default Profile;
