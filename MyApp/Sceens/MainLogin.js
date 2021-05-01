//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import Login from './Login'
import bg from '../Images/bg.jpg';


function MainLogin({navigation}) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (user) {
    navigation.navigate('Home')
  }
  return(
    <ImageBackground source={bg} style={styles.container}>
      <Login navigation={navigation}/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height:'100%',
        width:'100%'
    },
});

//make this component available to the app
export default MainLogin;
