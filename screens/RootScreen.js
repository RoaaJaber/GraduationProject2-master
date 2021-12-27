import React from "react";
import Main from "./Main";
import Home from "./Home";
import { createStackNavigator } from "@react-navigation/stack";

const firstRootStack = createStackNavigator();
const RootStack = createStackNavigator();

const FirstScreen = () => (
  <firstRootStack.Navigator headerMode="none">
    <firstRootStack.Screen name="Main" component={Main} />
    <firstRootStack.Screen name="Home" component={Home} />
  </firstRootStack.Navigator>
);

function RootScreen(props) {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="First"
        component={FirstScreen}
        options={{
          Title: "",
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
}
export default RootScreen;
