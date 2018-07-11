import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

const Container = styled.View`
  padding-top: 20;
  flex: 1;
`;

const NavItem = styled.Text`
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 10;
  padding-left: 10;
`;

const NavSection = styled.View`
  background-color: lightgray;
`;

const SectionHeading = styled.Text`
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 5;
  padding-left: 5;
`;

const FooterContainer = styled.View`
  padding-top: 20;
  padding-bottom: 20;
  padding-right: 20;
  padding-left: 20;
  background-color: lightgray;
`;
class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <Container>
        <ScrollView>
          <View>
            <SectionHeading>
              Section 1
            </SectionHeading>
            <NavSection>
              <NavItem onPress={this.navigateToScreen('Page1')}>
              Page1
              </NavItem>
            </NavSection>
          </View>
          <View>
            <SectionHeading>
              Section 2
            </SectionHeading>
            <NavSection>
              <NavItem onPress={this.navigateToScreen('Page2')}>
                Page2
              </NavItem>
              <NavItem onPress={this.navigateToScreen('Page3')}>
                Page3
              </NavItem>
            </NavSection>
          </View>
        </ScrollView>
        <FooterContainer>
          <Text>This is my fixed footer</Text>
        </FooterContainer>
      </Container>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;