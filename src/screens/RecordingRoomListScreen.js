import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';

class RecordingRoomListScreen extends React.Component {
  static navigationOptions = {
    title: 'RecordingRoomList',
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header {...this.props}>
          <Text style={{alignSelf: 'center'}}>녹음실</Text>
        </Header>
      </View>
    );
  }
}
export default RecordingRoomListScreen;
