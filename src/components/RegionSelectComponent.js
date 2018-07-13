import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';

const { height, width } = Dimensions.get('window');

const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  height: 40;
`;

const Tab = styled.TouchableHighlight`
  flex: 1;
  align-items: center;
`;

const RegionButton = styled.TouchableHighlight`
  width: ${width / 3};
  height: 40;
  justify-content: center;
  align-items: center;
  border-bottom-color: lightgray;
  border-bottom-width: 1;
  border-right-color: lightgray;
  border-right-width: 1;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ScrollArea = styled.ScrollView`
  flex: 1;
`;

const ScrollContentBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

class RegionSelectComponent extends React.Component {
  render() {
    return (
      <Container>
        <TabContainer>
          <Tab>
            <Text>시/도</Text>
          </Tab>
          <Text>></Text>
          <Tab>
            <Text>시/군/구</Text>
          </Tab>
          <Text>></Text>
          <Tab>
            <Text>읍/면/동</Text>
          </Tab>
        </TabContainer>
        <ScrollArea>
          <ScrollContentBox>
            <RegionButton>
              <Text>서울시</Text>
            </RegionButton>
            <RegionButton>
              <Text>경기도</Text>
            </RegionButton>
            <RegionButton>
              <Text>서울시</Text>
            </RegionButton>
            <RegionButton>
              <Text>경기도</Text>
            </RegionButton>
            <RegionButton>
              <Text>서울시</Text>
            </RegionButton>
            <RegionButton>
              <Text>경기도</Text>
            </RegionButton>
            <RegionButton>
              <Text>서울시</Text>
            </RegionButton>
            <RegionButton>
              <Text>경기도</Text>
            </RegionButton>
            <RegionButton>
              <Text>서울시</Text>
            </RegionButton>
            <RegionButton>
              <Text>경기도</Text>
            </RegionButton>
          </ScrollContentBox>
        </ScrollArea>
      </Container>
    );
  }
}

export default RegionSelectComponent;
