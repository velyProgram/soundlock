import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components';
import SubwaySearchComponent from './SubwaySearchComponent';
import RegionSelectComponent from './RegionSelectComponent';

const Header = styled.View`
  margin-top: 15;
  height: 40;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1;
  border-bottom-color: lightgray;
`;

const CloseBtn = styled.TouchableHighlight`
  width: 20;
  margin-left: 10;
  position: absolute;
  left: 0;
`;

const TabContainer = styled.View`
  height: 50;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1;
  border-bottom-color: lightgray;
`;

const Tab = styled.TouchableHighlight`
  flex: 1;
  height: 50;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3;
  ${props =>
    props.active
      ? 'border-bottom-color: orange;'
      : 'border-bottom-color: transparent;'};
`;

class MapSelectSearchModal extends React.Component {
  state = {
    isRegionTabOpen: true,
  };
  render() {
    const { visible, close, onSubmit } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
        <View style={{flex: 1}}>
          <Header>
            <CloseBtn onPress={close}>
              <Text>X</Text>
            </CloseBtn>
            <Text>지역 선택</Text>
          </Header>
          <View style={{flex:1}}>
            <TabContainer>
              <Tab
                active={this.state.isRegionTabOpen}
                onPress={() => this.setState({ isRegionTabOpen: true })}
              >
                <Text>지역</Text>
              </Tab>
              <Tab
                active={!this.state.isRegionTabOpen}
                onPress={() => this.setState({ isRegionTabOpen: false })}
              >
                <Text>지하철</Text>
              </Tab>
            </TabContainer>
            <View style={{flex:1}}>
              {this.state.isRegionTabOpen ? (
                <RegionSelectComponent />
              ) : (
                <SubwaySearchComponent submit={(latlon) => {
                  onSubmit(latlon);
                  close();
                }} />
              )}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default MapSelectSearchModal;
