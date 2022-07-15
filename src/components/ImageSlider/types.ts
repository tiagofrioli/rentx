import { ViewToken } from "react-native";

export interface ImageSliderProps {
  imageUrl: string[];
}

export interface ImageIndexProps {
  active: boolean;
}

export interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
