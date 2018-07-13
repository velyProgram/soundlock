import React from 'react';
import { View, Button, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
import { MapView } from 'expo';
import MenuIcon from '../images/menu.png';
import MapSelectSearchModal from './MapSelectSearchModal';
import Header from './Header';

const SearchBtn = styled.TouchableOpacity`
  border-top-left-radius: 25;
  border-top-right-radius: 25;
  border-bottom-left-radius: 25;
  border-bottom-right-radius: 25;
  flex: 1;
  height: 30;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
`;

const ListVewBtn = styled.TouchableOpacity`
  background-color: orange;
  align-items: center;
  justify-content: center;
`;

class MapSearch extends React.Component {
  state = {
    locationSelectModalVisible: false,
  };
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header {...this.props}>
          <SearchBtn
            onPress={() => this.setState({ locationSelectModalVisible: true })}
          >
            <Text>지역, 지하철 역으로 검색</Text>
          </SearchBtn>
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
        <ListVewBtn style={{ height: 50 }} onPress={() => this.props.navigation.navigate('RecordingRoomList')}>
          <Text style={{ color: '#fff' }}>목록 보기</Text>
        </ListVewBtn>
        <MapSelectSearchModal
          visible={this.state.locationSelectModalVisible}
          close={() => this.setState({ locationSelectModalVisible: false })}
        />
      </View>
    );
  }
}
export default MapSearch;
