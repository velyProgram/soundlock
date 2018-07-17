import React from 'react';
import { View, Button, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';
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
    latitude: 41.77,
    longitude: -88.02,
  };

  componentWillMount() {
    this.getCurrentGeolocation();
  }

  getCurrentGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
        });
      },
      error =>
        this.setState({
          error: error.message,
          latitude: 41.77,
          longitude: -88.07,
        }),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 },
    );
  };

  updateMapRegion = ({ latitude, longitude }) => {
    this.setState({ latitude: Number(latitude), longitude: Number(longitude) });
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
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.497175,
              longitude: 127.027926,
            }}
            title="서울역"
            description="서울역"
          />
        </MapView>
        <ListVewBtn
          style={{ height: 50 }}
          onPress={() => this.props.navigation.navigate('RecordingRoomList')}
        >
          <Text style={{ color: '#fff' }}>목록 보기</Text>
        </ListVewBtn>
        <MapSelectSearchModal
          visible={this.state.locationSelectModalVisible}
          close={() => this.setState({ locationSelectModalVisible: false })}
          onSubmit={this.updateMapRegion}
        />
      </View>
    );
  }
}
export default MapSearch;
