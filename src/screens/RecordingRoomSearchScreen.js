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
} from 'react-native';
import styled from 'styled-components';
import MenuIcon from '../images/menu.png';
import SubwaySearchModal from '../components/SubwaySearchModal';

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

const Header = styled.View`
  height: 80;
  align-self: stretch;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
        <Header>
          <Button
            color="black"
            title="<"
            onPress={() => this.props.navigation.goBack()}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Image style={{ width: 30, height: 30 }} source={MenuIcon} />
          </TouchableOpacity>
        </Header>
        <ScrollView>
          <Container>
            <View style={{ flex: 1 }}>
              <SearchCategoryBtn
                onPress={() =>
                  this.props.navigation.navigate('PracticeRoomList')
                }
              >
                <Text>지도로 찾기</Text>
              </SearchCategoryBtn>
            </View>
            <View style={{ flex: 1 }}>
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
