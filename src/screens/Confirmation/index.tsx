import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { RootStackParamList } from "../../@types/navigation";
import DoneSvg from "../../assets/done.svg";
import LogoSvg from "../../assets/logo_background_gray.svg";
import { Button } from "../../components/Button";

import { Container, Content, Footer, Message, Title } from "./styles";

type NextScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Confirmation"
>;

export function Confirmation() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<NextScreenNavigationProp>();

  function handleConfirm() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado</Title>

        <Message>Agora é só ir na RentX pegar o seu carro !</Message>
      </Content>

      <Footer>
        <Button title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
