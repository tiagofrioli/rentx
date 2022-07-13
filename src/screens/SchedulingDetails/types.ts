import { CarDTO } from "../../dto/CarDTO";

export interface Params {
  car: CarDTO;
  dates: string[];
}

export interface RentalPeriodProps {
  start: string;
  end: string;
}
