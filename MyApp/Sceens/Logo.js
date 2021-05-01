//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import img from '../Images/logon.png'

// create a component
const Logo = () => {
    return (
        <View>
            <Image source={img}style={{height:150, width:150}}/>
        </View>

    );
};

// define your styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'center',
        marginTop:20,
        color:'#ffffff',
        
        
    },
});

//make this component available to the app
export default Logo;
