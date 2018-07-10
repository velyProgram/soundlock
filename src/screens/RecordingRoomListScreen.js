import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

class RecordingRoomListScreen extends React.Component {
  static navigationOptions = {
    title: 'RecordingRoomList',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>녹음실</Text>
      </View>
    );
  }
}
export default RecordingRoomListScreen;
