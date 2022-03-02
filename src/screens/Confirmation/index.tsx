import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import DoneSvg from "../../assets/done.svg";
import LogoSvg from "../../assets/logo_background_gray.svg";
import { Button } from "../../components/Button";

import { Container, Content, Footer, Message, Title } from "./styles";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();

  //   const navigation = useNavigation();
  //   const route = useRoute();
  //   const { title, message, nextScreenRoute } = route.params as Params;

  //   function handleConfirm() {
  //     navigation.navigate(nextScreenRoute);
  //   }

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
        <Title>ASdASD</Title>

        <Message>ASDASDASD</Message>
      </Content>

      <Footer>
        <Button title="OK" onPress={() => {}} />
      </Footer>
    </Container>
  );
}
