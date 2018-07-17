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
  justify-content: space-between;
  height: 40;
  padding-left: 15;
  padding-right: 10;
  padding-bottom: 10;
`;

const BackBtn = styled.TouchableOpacity`
  width: 30;
  margin-right: 10;
  align-items: flex-start
`;

const MenuBtn = styled.TouchableOpacity`
  margin-left: 10;
  align-items: flex-end;
`;

class Header extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <BackBtn onPress={() => this.props.navigation.goBack()}>
          <Text>{`<`}</Text>
        </BackBtn>
        <View style={{flex: 1}}>
          {children}
        </View>
        <MenuBtn onPress={() => this.props.navigation.toggleDrawer()}>
          <Image style={{ width: 30, height: 30 }} source={MenuIcon} />
        </MenuBtn>
      </Container>
    );
  }
}

export default Header;