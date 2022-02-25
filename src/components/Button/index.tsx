import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
