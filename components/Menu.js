import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { connect } from "react-redux";

import * as Icons from "./Icons";
import MenuItem from "./MenuItem";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      })
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: new Animated.Value(screenHeight)
    };
  }

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 54
      }).start();
    }
    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    }
  };

  render() {
    const { top } = this.state;
    return (
      <AnimatedContainer style={{ top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Sayani Kundu</Title>
          <Subtitle>Designer at Design+Code</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1
          }}
        >
          <CloseView>
            <Icons.CloseIcon />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 99;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: #000;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: "PlayIcon",
    title: "Account",
    text: "settings"
  },
  {
    icon: "CoursesIcon",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "StarIcon",
    title: "Learn React",
    text: "start course"
  },
  {
    icon: "LogoutIcon",
    title: "Log out",
    text: "see you soon!"
  }
];

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
