import React from 'react'
import{NavigationContainer} from '@react-navigation/native'
import HomeSackNavigator from './navigations/Navigator'
const App=()=>{
  return(
    <NavigationContainer>
      <HomeSackNavigator></HomeSackNavigator>
    </NavigationContainer>
  )
}
export default App;