import { Feather } from "@expo/vector-icons";

import React, { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import {
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

// interface Params {
//   car: CarDTO;
//   dates: string[];
// }

// interface RentalPeriod {
//   start: string;
//   end: string;
// }

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  //   const rentTotal = Number(dates.length * car.price);

  //   async function handleConfirmRental() {
  //     setLoading(true);

  //     await api.post('/rentals', {
  //       user_id: 1,
  //       car_id: car.id,
  //       start_date: new Date(),
  //       end_date: new Date(),
  //       total: rentTotal
  //     })
  //     .then(() => {
  //       navigation.navigate('Confirmation', {
  //         nextScreenRoute: 'Home',
  //         title: 'Carro alugado!',
  //         message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`
  //       })
  //     })
  //     .catch((erro) => {
  //       setLoading(false);
  //       Alert.alert('Não foi possível confirmar o agendamento.')
  //     })
  //   }

  //   function handleBack() {
  //     navigation.goBack();
  //   }

  //   useEffect(() => {
  //     setRentalPeriod({
  //       start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
  //       end: format(
  //         getPlatformDate(new Date(dates[dates.length - 1])),
  //         "dd/MM/yyyy"
  //       ),
  //     });
  //   }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        {/* <ImageSlider 
          imagesUrl={car.photos} 
        /> */}
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>fgdsfg</Brand>
            <Name>sdfgdsfg</Name>
          </Description>

          <Rent>
            <Period>sdfgdfg</Period>
            <Price>R$ 32434</Price>
          </Rent>
        </Details>

        <Accessories>
          {/* {
            car.accessories.map(accessory => (
              <Accessory 
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))
          } */}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>1234123</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>213423</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>234234</RentalPriceQuota>
            <RentalPriceTotal>R$ 23423</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={() => {}}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>
  );
}
