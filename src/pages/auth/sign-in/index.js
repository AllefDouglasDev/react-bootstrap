import React from "react";

import { Button } from "~/components";
import { Container, Title } from "./styles";

export default function SignIn({ ...props }) {
  return (
    <Container>
      <Title>Hello World!</Title>

      <Button value="Sign in" />
    </Container>
  );
}
