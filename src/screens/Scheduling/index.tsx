import React from "react";
import { BackButton } from "../../components/BackButton";
import theme from "../../styles/theme";

import ArrowSvg from "../../assets/arrow.svg";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
} from "./styles";

export function Scheduling() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>Escolha uma data de inicio e fim do aluguel</Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>12/01/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={false}>12/02/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
    </Container>
  );
}
