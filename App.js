
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducers'

import Converter from './src/screens/Converter';
import Courses from './src/screens/Courses'

const store = createStore(reducer, applyMiddleware(ReduxThunk))

const ConverterScreen = () => {
    return(
        <Provider store={store}>
            <Converter />
        </Provider>
    )
}

const CoursesScreen = () => {
    return(
        <Provider store={store}>
            <Courses />
        </Provider>
    )
}

export default createAppContainer(createBottomTabNavigator(
  {
    Converter: ConverterScreen,
    Courses: CoursesScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Converter') {
          iconName = 'ios-play';
        } else if (routeName === 'Courses') {
          iconName = 'ios-arrow-back';
        }

        return <IconComponent name='ios-play' size={25} color='white' />;
      },
    }),
    tabBarOptions: {
        labelStyle: {
            fontSize: 20,
            color: 'white'
        },
        activeBackgroundColor: '#cc3916',
        inactiveBackgroundColor: '#FD4D01'
    }
  }
));