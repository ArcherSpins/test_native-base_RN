import React from 'react';

import HomeScreen from './home_screen';
import AppsScreen from './apps_screen';
import NewsScreen from './news_screen';
import ContactsScreen from './contacts_screen';

import { createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

const TabNav = createAppContainer(createBottomTabNavigator(
    {
      Home: HomeScreen,
      Apps: AppsScreen,
      News: NewsScreen,
      Contacts: ContactsScreen
    },
    {
      navigationOptions: {
        tabBarVisible: false,
        header:null,
      },
      tabBarOptions: {
          activeBackgroundColor: '#02518b',
          inactiveBackgroundColor: '#117ac7',
          showIcon: false,
          showLabel: false,
      }
    }
));


export default createAppContainer(createDrawerNavigator({
    Home: {
      screen: TabNav,
      navigationOptions: {
        drawerLockMode: 'locked-closed'
      }
    },
}));