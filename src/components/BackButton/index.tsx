import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Container } from "./styles";
import theme from "../../styles/theme";
import { BackButtonProps } from "./types";

export function BackButton({ color, ...rest }: BackButtonProps) {
  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
