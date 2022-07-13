import { CarDTO } from "../../dto/CarDTO";

export interface RentalPeriodProps {
  startFormatted: string;
  endFormatted: string;
}
export interface Params {
  car: CarDTO;
}
