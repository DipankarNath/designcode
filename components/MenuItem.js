import React from "react";
import styled from "styled-components";
import * as Icons from "./Icons";

const getIconComp = icon => {
  if (icon === "PlayIcon") {
    return <Icons.PlayIcon />;
  } else if (icon === "CoursesIcon") {
    return <Icons.CoursesIcon />;
  } else if (icon === "StarIcon") {
    return <Icons.StarIcon />;
  } else {
    return <Icons.LogoutIcon />;
  }
};

const MenuItem = ({ title, text, icon }) => (
  <Container>
    <IconView>{getIconComp(icon)}</IconView>
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-left: 20px;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
`;

export default MenuItem;
