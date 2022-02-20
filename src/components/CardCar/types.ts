interface CardCar {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

export interface CardProps {
  data: CardCar;
}
