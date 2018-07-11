import React from 'react';
import styled from 'styled-components';
import {
  Modal,
  View,
  TextInput,
  TouchableHighlight,
  Text,
  Button,
  ScrollView,
  Image
} from 'react-native';
import Photo from '../images/room_photo.jpg';

const Container = styled.View`
  margin-top: 22;
  padding-left: 10;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
`;

const SubwayNameInput = styled.TextInput`
  height: 30;
  padding-left: 10;
  padding-top: 5;
  padding-right: 10;
  padding-bottom: 5;
  border-width: 1;
  border-top-right-radius: 5;
  border-top-left-radius: 5;
  border-bottom-right-radius: 5;
  border-bottom-left-radius: 5;
  border-color: lightgray;
  background: white;
  color: #000;
`;

const Header = styled.View`
  height: 30;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const CloseBtn = styled.TouchableHighlight`
  width: 20;
  margin-left: 10;
`;

const SubwayRow = styled.View`
  padding-top: 5;
  padding-bottom: 5;
  padding-left: 7;
  padding-right: 7;
  border-bottom-color: gray;
  border-bottom-width: 1;
  flex-direction: row;
  align-items: center;
`;

const SubwayNum = styled.Text`
  color: #fff;
  align-self: center;
`;

const SubwayNumCicle = styled.View`
  border-top-right-radius: 50;
  border-top-left-radius: 50;
  border-bottom-right-radius: 50;
  border-bottom-left-radius: 50;
  background-color: #996CAC;
  width: 20;
  height: 20;
  align-items: center;
  margin-right: 10;
`;

export default (SubwaySearchModal = ({ visible, close }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={() => {
      alert('Modal has been closed.');
    }}
  >
    <Container>
      <Header>
        <CloseBtn onPress={close}>
          <Text>X</Text>
        </CloseBtn>
        <Text>지하철 역으로 찾기</Text>
      </Header>
      <View>
        <SubwayNameInput placeholder="검색할 지하철 역 명을 입력해주세요." />
      </View>
      <ScrollView style={{ paddingLeft: 7, paddingRight: 7, paddingTop: 5, paddingBottom: 5}}>
        <TouchableHighlight onPress={close}>
          <SubwayRow>
            <SubwayNumCicle>
              <SubwayNum>5</SubwayNum>
            </SubwayNumCicle>
            <Text>강동역</Text>
          </SubwayRow>
        </TouchableHighlight>
      </ScrollView>
    </Container>
  </Modal>
));
