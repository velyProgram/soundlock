import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/* <Button
          onPress={() => this.props.navigation.navigate('PracticeRoomSearch')}
          title="연습실 찾기"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate('BandRoomSearch')}
          title="합주실 찾기"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
        <Button
          onPress={() => this.props.navigation.navigate('RecordingRoomSearch')}
          title="녹음실 찾기"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
export default HomeScreen;
