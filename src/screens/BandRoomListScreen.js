import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

class BandRoomListScreen extends React.Component {
  static navigationOptions = {
    title: 'BandRoomList',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>합주실</Text>
      </View>
    );
  }
}
export default BandRoomListScreen;
