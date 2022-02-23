import React from "react";

import { Container, Name } from "./styles";
import { CardAcessoryProps } from "./types";

export function CardAcessory({ name, icon: Icon }: CardAcessoryProps) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}
