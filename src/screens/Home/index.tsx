import React from "react";
import { StatusBar, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {
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
        renderItem={({ item }) => <CardCar data={carData} />}
      />
    </Container>
  );
}
