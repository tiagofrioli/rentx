import { RectButtonProps } from "react-native-gesture-handler";
import { CarDTO } from "../../dto/CarDTO";

export interface CardProps extends RectButtonProps {
  data: CarDTO;
}
