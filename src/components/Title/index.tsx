import React from "react";
import { Container } from "./styles";

import { FaGithub } from "react-icons/fa";

const Title = () => (
  <Container>
    <h1>
      <FaGithub /> GitHub User Search
    </h1>
    <p>
      Browse users and their profiles via <span>the GitHub API</span>
    </p>
  </Container>
);

export default Title;
