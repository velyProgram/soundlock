import React from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styled from 'styled-components';
import _ from 'lodash';
import SubwayList, { SubwayLineColor } from '../data/SubwayList';

const SubwayRow = styled.View`
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 7;
  padding-right: 7;
  border-bottom-color: lightgray;
  border-bottom-width: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  background-color: ${props => props.color || 'black'};
  padding-top: 3;
  padding-bottom: 3;
  padding-left: 7;
  padding-right: 7;
  align-items: center;
  margin-left: 4;
  min-width: 24;
`;

const Container = styled.View`
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  flex: 1;
`;

const LineNums = styled.View`
  flex-direction: row;
`;

class SubwaySearchComponent extends React.Component {
  state = {
    subwayResultList: [],
  };

  findSubwayByName = async text => {
    const stationCheckList = [];
    const subwayResultList = await SubwayList.map((station, idx) => {
      if (
        station.station_nm.includes(text) &&
        !stationCheckList.includes(station.cyber_st_code)
      ) {
        let newStation = { ...station };
        stationCheckList.push(station.cyber_st_code);

        const sameNumStations = SubwayList.filter(
          obj => obj.cyber_st_code === station.cyber_st_code,
        );

        const lineNums = sameNumStations.map(obj => obj.line_num);
        newStation['line_num'] = lineNums;

        return newStation;
      }
    }).filter(result => result != undefined);

    this.setState({ subwayResultList });
  };

  onSelect = subway => {
    this.props.submit({
      latitude: subway.xpoint_wgs,
      longitude: subway.ypoint_wgs,
    });
  };

  render() {
    // console.log(this.state.subwayResultList);
    return (
      <Container>
        <View>
          <SubwayNameInput
            placeholder="검색할 지하철 역 명을 입력해주세요."
            onChangeText={this.findSubwayByName}
          />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={{
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            {this.state.subwayResultList &&
              this.state.subwayResultList.length > 0 &&
              this.state.subwayResultList.map(subway => (
                <TouchableHighlight
                  key={subway.cyber_st_code}
                  onPress={this.onSelect.bind(this, subway)}
                >
                  <SubwayRow>
                    <Text>{subway.station_nm}</Text>
                    <LineNums>
                      {subway.line_num.map(num => (
                        <SubwayNumCicle
                          key={`${subway.station_nm}_${num}`}
                          color={SubwayLineColor[num]}
                        >
                          <SubwayNum>{num}</SubwayNum>
                        </SubwayNumCicle>
                      ))}
                    </LineNums>
                  </SubwayRow>
                </TouchableHighlight>
              ))}
          </ScrollView>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}

export default SubwaySearchComponent;
