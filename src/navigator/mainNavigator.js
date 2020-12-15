import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile185541Navigator from '../features/UserProfile185541/navigator';
import UserProfile185509Navigator from '../features/UserProfile185509/navigator';
import Tutorial185508Navigator from '../features/Tutorial185508/navigator';
import NotificationList185480Navigator from '../features/NotificationList185480/navigator';
import Settings185479Navigator from '../features/Settings185479/navigator';
import Settings185471Navigator from '../features/Settings185471/navigator';
import UserProfile185469Navigator from '../features/UserProfile185469/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile185541: { screen: UserProfile185541Navigator },
UserProfile185509: { screen: UserProfile185509Navigator },
Tutorial185508: { screen: Tutorial185508Navigator },
NotificationList185480: { screen: NotificationList185480Navigator },
Settings185479: { screen: Settings185479Navigator },
Settings185471: { screen: Settings185471Navigator },
UserProfile185469: { screen: UserProfile185469Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
