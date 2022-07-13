import React from "react";
import { Text } from "react-native";
import { BackButton } from "../../components/BackButton";
import { CardAcessory } from "../../components/CardAcessory";
import { ImageSlider } from "../../components/ImageSlider";
import SpeedSvg from "../../assets/speed.svg";
import {
  Brand,
  Container,
  ContainerAcessories,
  ContainerCarImage,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../@types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { Routes } from "../../navigation";
import { Params } from "./types";

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CarDetails"
>;

export function CarDetails() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  function handleScheduling() {
    navigation.navigate("Scheduling", { car });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <ContainerCarImage>
        <ImageSlider imageUrl={car.photos} />
      </ContainerCarImage>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R${car.rent.price}</Price>
          </Rent>
        </Details>
        <ContainerAcessories>
          {car.accessories.map((accessory) => (
            <CardAcessory
              key={accessory.type}
              name={accessory.name}
              icon={SpeedSvg}
            />
          ))}
        </ContainerAcessories>
        <Text>{car.about}</Text>
      </Content>
      <Footer>
        <Button title="Escolher período" onPress={handleScheduling} />
      </Footer>
    </Container>
  );
}
