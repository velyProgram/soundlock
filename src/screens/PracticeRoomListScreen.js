import React from 'react';
import { View, Button, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
import { MapView } from 'expo';
import MenuIcon from '../images/menu.png';

const Header = styled.View`
  height: 80;
  align-self: stretch;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30;
  padding-left: 10;
  padding-right: 10;
`;

const SearchBtn = styled.TouchableOpacity`
  border-top-left-radius: 25;
  border-top-right-radius: 25;
  border-bottom-left-radius: 25;
  border-bottom-right-radius: 25;
  flex: 1;
  height: 40;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
  margin-right: 5;
  margin-left: 5;
`;

const ListVewBtn = styled.TouchableOpacity`
  background-color: orange;
  align-items: center;
  justify-content: center;
`;

class PracticeRoomListScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header>
          <Button
            color="black"
            title="<"
            onPress={() => this.props.navigation.goBack()}
          />
          <SearchBtn>
            <Text>지역, 지하철 역으로 검색</Text>
          </SearchBtn>
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Image style={{ width: 30, height: 30 }} source={MenuIcon} />
          </TouchableOpacity>
        </Header>
        <MapView
          style={{
            flex: 1,
          }}
          provider="google"
          region={{
            latitude: 37.569371,
            longitude: 126.981303,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <ListVewBtn style={{height: 50}}>
          <Text style={{color: '#fff'}}>목록 보기</Text>
        </ListVewBtn>
      </View>
    );
  }
}
export default PracticeRoomListScreen;
