import React from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import styled from 'styled-components';
import MenuIcon from '../images/menu.png';
import SubwaySearchModal from '../components/SubwaySearchModal';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 15;
`;

const SearchCategoryBtn = styled.TouchableOpacity`
  height: 150;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border-top-left-radius: 5;
  border-top-right-radius: 5;
  border-bottom-left-radius: 5;
  border-bottom-right-radius: 5;
  width: ${width * 0.45}
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
      { title: '안녕하세요' },
      { title: '안녕하세요1' },
      { title: '안녕하세요2' },
      { title: '안녕하세요3' },
      { title: '안녕하세요4' },
      { title: '안녕하세요5' },
      { title: '안녕하세요6' },
      { title: '안녕하세요7' },
    ],
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _renderItem(item) {
    return (
      <Card key={item.title}>
        <Text>{item.title}</Text>
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Header {...this.props}/>
        <ScrollView>
          <Container>
            <View>
              <SearchCategoryBtn
                onPress={() =>
                  this.props.navigation.navigate('MapSearch')
                }
              >
                <Text>지도로 찾기</Text>
              </SearchCategoryBtn>
            </View>
            <View>
              <SearchCategoryBtn onPress={() => this.setModalVisible(true)}>
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
            {this.state.entries.map(entrie => this._renderItem(entrie))}
          </ScrollView>

          <Text>최근 등록된 합주실</Text>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {this.state.entries.map(entrie => this._renderItem(entrie))}
          </ScrollView>
        </ScrollView>
        <SubwaySearchModal
          visible={this.state.modalVisible}
          close={() => this.setModalVisible(!this.state.modalVisible)}
        />
      </View>
    );
  }
}

export default RecordingRoomSearchScreen;
