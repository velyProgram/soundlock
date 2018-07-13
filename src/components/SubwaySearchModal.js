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
import SubwaySearchComponent from './SubwaySearchComponent';

const Container = styled.View`
  margin-top: 22;
  padding-left: 10;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
`;

const Header = styled.View`
  height: 30;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled.TouchableHighlight`
  width: 20;
  margin-left: 10;
  position: absolute;
  left: 0;
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
      <SubwaySearchComponent />
    </Container>
  </Modal>
));
