//import liraries
import React, { Component, useState } from 'react';
import { View,TextInput,TouchableOpacity, Text, StyleSheet, Alert, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import Logo from './Logo';

// create a component

const Login = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [matkhau, setmatkhau] = useState('')
    const checkInput = () =>{
        if (!email.trim()) {
            Alert.alert('Thông báo','Hãy nhập tài khoản');
            return;
          }
        else if (!matkhau.trim()) {
            Alert.alert('Thông báo','Hãy nhập mật khẩu');
            return;
          }
        else{
            auth().signInWithEmailAndPassword(email, matkhau)
            .then()
            .catch(e =>{
                Alert.alert('Thông báo','Sai tài khoản hoặc mật khẩu');
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Logo />
            </View>
            <View style={styles.taikhoanContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    value={email}
                    onChangeText={text => setemail(text)} />


                <TextInput
                    placeholder="Mật khẩu"
                    secureTextEntry = {true}
                    style={styles.input}
                    value={matkhau}
                    onChangeText={text => setmatkhau(text)}
                     />
                <TouchableOpacity style={styles.nut} onPress={()=>{checkInput()}}>
                    <Text style={styles.chu}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.view}>
                <Text style={styles.chu1}>Chưa có tài khoản?</Text>
                <TouchableOpacity  onPress={()=>{navigation.navigate('Signup')}}>
                    <Text style={styles.chu1}>Đăng ký ngay</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    taikhoanContainer: {
        flex: 2,
        alignItems: 'center',
    },
    input:{
        height:45,
        backgroundColor:'#ffffff',
        color:'black',
        width:250,
        borderRadius:8,
        margin:10,
        fontSize:15,
        paddingLeft:12,
    },
    loi:{
        fontSize:20,
        color:'red',
        alignSelf:'center',
        backgroundColor:'#bdbadb'
    },
    view:{
        flexDirection:'row',
        marginTop:20,
        marginRight:30,
        alignSelf:'flex-end',
    },
    nut:{
        alignSelf:'center',
        height:40,
        width:160,
        alignItems:'center',
        marginTop:20,
        backgroundColor:'red',
        borderRadius:8,
        padding:5
    },
    chu:{
        textAlign:'center',
        color:'#fffb26',
        fontWeight:'bold',
        fontSize:20

    },
    chu1:{
        textAlign:'center',
        color:'white',
        fontSize:15
    },
    Anh:{
        height:'100%',
        width:'100%'
    }
});

//make this component available to the app
export default Login;
