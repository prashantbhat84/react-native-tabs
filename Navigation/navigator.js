import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";
import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const stackNav = createStackNavigator(
  {
    Screen1: { screen: Screen1, navigationOptions: { title: "Home Screen" } }
  },
  {
    defaultNavigationOptions: {
      title: "Gariyasi"
    }
  }
);

const stackNav1 = createStackNavigator(
  {
    Screen3: {
      screen: Screen3,
      navigationOptions: {
        title: "Screen3",
        headerTintColor: "rgb(0,0,255)"
      }
    },
    Screen4: {
      screen: Screen4,
      navigationOptions: {
        title: "Screen4",
        headerTintColor: "rgb(0,0,255)"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: "A Screen 2"
    }
  }
);
const tabs = createMaterialTopTabNavigator(
  {
    tab1: {
      screen: Screen1,
      navigationOptions: {
        swipeEnabled: true,

        tabBarIcon: tabInfo => {
          return (
            <FontAwesome name="home" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    },
    tab2: {
      screen: Screen2,
      navigationOptions: {
        swipeEnabled: true,
        tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              name="account-group"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    tab3: {
      screen: Screen3,
      navigationOptions: {
        swipeEnabled: true,
        tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              name="account-circle"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    tab4: {
      screen: Screen4,
      navigationOptions: {
        swipeEnabled: true,
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="md-notifications"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "rgb(0,255,0)",
      showIcon: true,
      showLabel: false
    }
  }
);
export default createAppContainer(tabs);
