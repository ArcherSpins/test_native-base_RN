import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Drawer, Footer, FooterTab, Badge, Button, Icon } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { bgComponentSmoke } from './src/constants';

import { HeaderComponent, Sidebar, SpinnerComponent, FooterComponent } from './src/components';


export default class App extends React.Component {

  state = {
      loadedFont: false
  }

  async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({loadedFont: true})
  }

  closeDrawer() {
    this.drawer._root.close()
  };

  openDrawer = () => { 
    this.drawer._root.open()
  };

  render() {
    if(!this.state.loadedFont) 
      return(
        <View style={styles.loading_container}>
          <SpinnerComponent />
        </View>
      )

    return (
      <Drawer ref={(ref) => {this.drawer = ref;}}
          content={<Sidebar bgColor={bgComponentSmoke} navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}>
          <Container>
            <HeaderComponent title="Sidebar" bgColor={bgComponentSmoke} openDrawer={this.openDrawer} />
            <ScrollView style={{flex: 1}}>
              <Text>Content</Text>
            </ScrollView>
            <FooterComponent bgColor={bgComponentSmoke} />
          </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgComponentSmoke
  }
});
