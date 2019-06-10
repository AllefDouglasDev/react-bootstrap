import React from "react";

import { Container, Text } from "./styles";

export default function Button({ value, ...props }) {
  return (
    <Container {...props}>
      <Text>{value}</Text>
    </Container>
  );
}
