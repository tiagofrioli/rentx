import React, { useRef, useState } from "react";
import { FlatList } from "react-native";

import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageWrapper,
} from "./styles";
import { ChangeImageProps, ImageSliderProps } from "./types";

export function ImageSlider({ imageUrl }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageWrapper>
        {imageUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageWrapper>

      <FlatList
        data={imageUrl}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}
