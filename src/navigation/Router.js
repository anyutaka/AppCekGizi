import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home2, LocationDiscover, Setting2, ProfileCircle,} from 'iconsax-react-native';
import { HomeScreen, BFscreen, ProfileScreen, SettingScreen, Search, AddFood, DetailFood, EditFood, SplashScreen, Login, Register} from '../screens/Index';
import stackScreen from '../stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="BFscreen"
        component={BFscreen}
        options={{
          tabBarLabel: 'Food',
          tabBarIcon: ({focused, color}) => (
            <LocationDiscover
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({focused, color}) => (
            <Setting2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="stackScreen"
          component={stackScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
          }}
        />
        <Stack.Screen
          name="AddFood"
          component={AddFood}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
          }}
        />
        <Stack.Screen
          name="DetailFood"
          component={DetailFood}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
          }}
        />
        <Stack.Screen
          name="EditFood"
          component={EditFood}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};
export default Router;
