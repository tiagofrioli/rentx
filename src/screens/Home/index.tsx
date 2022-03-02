import React from "react";
import { StatusBar, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import { RootStackParamList } from "../../@types/navigation";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

export function Home() {
  const { navigate } = useNavigation<HomeNavigationProp>();
  const {
    params: { name },
  } = useRoute<HomeScreenRouteProp>();

  const carData = {
    brand: "audi",
    name: "RS % coupe",
    rent: {
      period: "AO dia",
      price: 120,
    },
    thumbnail:
      "https://2.bp.blogspot.com/-0iXVVOTzrok/XJ1EW_HvZKI/AAAAAAACu80/06P7i88J9qs-x4aX-ZFSY-W85vnerhe4wCLcBGAs/s1600/Audi_RS5_048-1.jpg",
  };

  function handleCarDetails() {
    navigate("CarDetails", { option: "" });
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
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <CardCar data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
