import * as React from "react";
import styled from "styled-components";

const Logo = ({ image, title }) => (
  <Container>
    <Image source={image} resizeMode="contain" />
    <Title>{title}</Title>
  </Container>
);

const Container = styled.View`
  padding: 12px 16px;
  flex-direction: row;
  background: white;
  height: 60px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Title = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-left: 8px;
`;

export default Logo;
