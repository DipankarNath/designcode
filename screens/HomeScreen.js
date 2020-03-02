import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

import Card from "../components/Card";
import Logo from "../components/Logo";
import { NotificationIcon } from "../components/Icons";
import Course from "../components/Course";
import Menu from "../components/Menu";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: new Animated.Value(1),
      opacity: new Animated.Value(1)
    };
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();
      StatusBar.setBarStyle("light-content", true);
    }
    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();
      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    marginLeft: 20
                  }}
                >
                  <Avatar source={require("../assets/avatar.jpg")} />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>Cypher</Name>
                <NotificationIcon
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                horizontal
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30
                }}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} title={logo.text} />
                ))}
              </ScrollView>
              <Subtitle>CONTINUE LEARNING</Subtitle>
              <ScrollView
                horizontal
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    logo={card.logo}
                    caption={card.caption}
                    subtitle={card.subtitle}
                  />
                ))}
              </ScrollView>
              <Subtitle>Popular Cources</Subtitle>
              {courses.map((course, index) => (
                <Course
                  key={index}
                  title={course.title}
                  subtitle={course.subtitle}
                  image={course.image}
                  logo={course.logo}
                  name={course.author}
                  caption={course.caption}
                  avatar={course.avatar}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  /* margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0; */
`;

const RootView = styled.View`
  flex: 1;
  background-color: #000;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    caption: "React Native",
    subtitle: "1 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    caption: "React Native",
    subtitle: "2 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    caption: "React Native",
    subtitle: "3 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("../assets/background14.jpg"),
    caption: "React Native",
    subtitle: "4 of 12 sections",
    logo: require("../assets/logo-react.png")
  }
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];
