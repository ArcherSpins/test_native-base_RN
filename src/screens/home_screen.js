import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { Container, Drawer } from 'native-base';
import { HeaderComponent, Sidebar, SpinnerComponent, FooterComponent } from '../components';
import { bgComponentSmoke } from '../constants';
import HocScreen from '../hoc/screen_hoc';

class HomeScreen extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
    };
  
    render() {
      return(
          <HocScreen {...this.props} title="Home">
            <Text>Home Screen</Text>
          </HocScreen>
      )
    }
}


const styles = StyleSheet.create({
    content: {
        flex: 1
    }
});

export default HomeScreen 