import React from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 15;
`;

const SearchCategoryBtn = styled.TouchableOpacity`
  height: 150;
  margin-left: 10;
  margin-right: 10;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border-top-left-radius: 5;
  border-top-right-radius: 5;
  border-bottom-left-radius: 5;
  border-bottom-right-radius: 5;
`;

const Card = styled.View`
  width: 300;
  height: 200;
  justify-content: center;
  align-items: center;
  border-color: gray;
  border-width: 1;
  margin-right: 3;
  background-color: white;
`;

class RecordingRoomSearchScreen extends React.Component {
  state = {
    entries: [
      {title: '안녕하세요'},
      {title: '안녕하세요1'},
      {title: '안녕하세요2'},
      {title: '안녕하세요3'},
      {title: '안녕하세요4'},
      {title: '안녕하세요5'},
      {title: '안녕하세요6'},
      {title: '안녕하세요7'},
    ],
  }
  _renderItem (item) {
    return (
      <Card key={item.title}>
        <Text>{ item.title }</Text>
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Container>
          <View style={{flex: 1}}>
            <SearchCategoryBtn onPress={() => this.props.navigation.navigate('PracticeRoomList')} >
              <Text>지도로 찾기</Text>
            </SearchCategoryBtn>
          </View>
          <View style={{flex: 1}}>
            <SearchCategoryBtn onPress={() => null} >
              <Text>지하철로 찾기</Text>
            </SearchCategoryBtn>
          </View>
        </Container>

        <Text>추천 합주실</Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {
            this.state.entries.map((entrie) => this._renderItem(entrie))
          }
        </ScrollView>
        
        <Text>최근 등록된 합주실</Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {
            this.state.entries.map((entrie) => this._renderItem(entrie))
          }
        </ScrollView>
      </View>
    );
  }
}

export default RecordingRoomSearchScreen;