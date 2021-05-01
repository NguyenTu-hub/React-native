import React from 'react'
import{createStackNavigator} from '@react-navigation/stack'
import{createDrawerNavigator} from '@react-navigation/drawer'
import Home from'../Sceens/home'
import detail from'../Sceens/detail'
import Login from '../Sceens/Login'
const Stack=createStackNavigator();
const screenOptionStyle={
    headerShown:false
}
const Drawer = createDrawerNavigator();
function App() {
    return (
        <Drawer.Navigator screenOptions={screenOptionStyle}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
    );
  }
const HomeSackNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={App}></Stack.Screen>
            <Stack.Screen name="Detail" component={detail}></Stack.Screen>
            <Stack.Screen name="Login" component={App}></Stack.Screen>
        </Stack.Navigator>
    )
}
export default HomeSackNavigator;