import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducers'

import { bgComponentSmoke } from './src/constants';
import { SpinnerComponent } from './src/components';

import DrawerNavigationComponent from './src/screens';

const store = createStore(reducer, applyMiddleware(ReduxThunk))

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

  render() {
    if(!this.state.loadedFont) 
      return(
        <View style={styles.loading_container}>
          <SpinnerComponent />
        </View>
      )

    return (
      <Provider store={store}>
          <DrawerNavigationComponent />
      </Provider>
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
