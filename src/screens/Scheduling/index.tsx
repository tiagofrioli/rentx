import React, { useState } from "react";
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
  Content,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";
import { Calendar, DayProps, MarkedDateProps } from "../../components/Calendar";
import { Params, RentalPeriodProps } from "./types";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../@types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlatformDate";

type NextScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Scheduling"
>;

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentPeriod, setRentPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );
  const route = useRoute();
  const { car } = route.params as Params;
  const navigation = useNavigation<NextScreenNavigationProp>();

  function handleRentalConfirm() {
    if (!rentPeriod.startFormatted || !rentPeriod.endFormatted) {
      Alert.alert("Selecione a data inicial e data final que deseja alugar.");
    } else {
      navigation.navigate("SchedulingDetails", {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>Escolha uma data de inicio e fim do aluguel</Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>{rentPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={false}>{rentPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
          onPress={handleRentalConfirm}
          enabled={!!rentPeriod.startFormatted}
        />
      </Footer>
    </Container>
  );
}
