import React from "react";

import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageWrapper,
} from "./styles";
import { ImageSliderProps } from "./types";

export function ImageSlider({ imageUrl }: ImageSliderProps) {
  return (
    <Container>
      <ImageWrapper>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageWrapper>

      <CarImageWrapper>
        <CarImage source={{ uri: imageUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
