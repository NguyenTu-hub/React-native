import React from 'react'
import{createStackNavigator} from '@react-navigation/stack'
import Home from'../Sceens/home'
import detail from'../Sceens/detail'
const Stack=createStackNavigator();
const screenOptionStyle={
    headerShown:false
}
const HomeSackNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Detail" component={detail}></Stack.Screen>
        </Stack.Navigator>
    )
}
export default HomeSackNavigator;