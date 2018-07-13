import React from 'react';
import styled from 'styled-components';
import MenuIcon from '../images/menu.png';
import {
  TouchableOpacity,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';

const Container = styled.View`
  margin-top: 35;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 35;
  padding-right: 45;
  padding-bottom: 10;
`;

const BackBtn = styled.TouchableHighlight`
  width: 20;
  margin-left: 10;
  position: absolute;
  left: 10;
`;

const MenuBtn = styled.TouchableOpacity`
  position: absolute;
  right: 10;
`;

class Header extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <BackBtn onPress={() => this.props.navigation.goBack()}>
          <Text>{`<`}</Text>
        </BackBtn>
        {children}
        <MenuBtn onPress={() => this.props.navigation.toggleDrawer()}>
          <Image style={{ width: 30, height: 30 }} source={MenuIcon} />
        </MenuBtn>
      </Container>
    );
  }
}

export default Header;