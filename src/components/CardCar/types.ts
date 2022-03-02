import { RectButtonProps } from "react-native-gesture-handler";

interface CardCar {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

export interface CardProps extends RectButtonProps {
  data: CardCar;
}
