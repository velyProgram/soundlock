import React from 'react';
import { View, TextInput, Text, ScrollView, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

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

const SubwayNum = styled.Text`
  color: #fff;
  align-self: center;
`;

const SubwayNumCicle = styled.View`
  border-top-right-radius: 50;
  border-top-left-radius: 50;
  border-bottom-right-radius: 50;
  border-bottom-left-radius: 50;
  background-color: #996cac;
  width: 20;
  height: 20;
  align-items: center;
  margin-right: 10;
`;

const Container = styled.View`
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
`;

class SubwaySearchComponent extends React.Component {
  render() {
    return (
      <Container>
        <View>
          <SubwayNameInput placeholder="검색할 지하철 역 명을 입력해주세요." />
        </View>
        <ScrollView
          style={{
            paddingLeft: 7,
            paddingRight: 7,
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <TouchableHighlight>
            <SubwayRow>
              <SubwayNumCicle>
                <SubwayNum>5</SubwayNum>
              </SubwayNumCicle>
              <Text>강동역</Text>
            </SubwayRow>
          </TouchableHighlight>
        </ScrollView>
      </Container>
    );
  }
}

export default SubwaySearchComponent;
