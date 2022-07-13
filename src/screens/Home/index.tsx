import React, { useEffect, useState } from "react";
import { StatusBar, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import { RootStackParamList } from "../../@types/navigation";
import api from "../../services/api";
import { CarDTO } from "../../dto/CarDTO";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardCar data={item} onPress={() => handleCarDetails(item)} />
        )}
      />
    </Container>
  );
}
