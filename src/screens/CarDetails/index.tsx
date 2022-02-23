import React from "react";
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
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <ContainerCarImage>
        <ImageSlider
          imageUrl={[
            "https://2.bp.blogspot.com/-0iXVVOTzrok/XJ1EW_HvZKI/AAAAAAACu80/06P7i88J9qs-x4aX-ZFSY-W85vnerhe4wCLcBGAs/s1600/Audi_RS5_048-1.jpg",
          ]}
        />
      </ContainerCarImage>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Hurricane</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <ContainerAcessories>
          <CardAcessory name="380Km/h" icon={SpeedSvg} />
          <CardAcessory name="380Km/h" icon={SpeedSvg} />
          <CardAcessory name="380Km/h" icon={SpeedSvg} />
          <CardAcessory name="380Km/h" icon={SpeedSvg} />
          <CardAcessory name="380Km/h" icon={SpeedSvg} />
          <CardAcessory name="380Km/h" icon={SpeedSvg} />
        </ContainerAcessories>
      </Content>
    </Container>
  );
}
