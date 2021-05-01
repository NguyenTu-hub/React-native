//import liraries
import React, { Component, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import bg from '../Images/bg.jpg';
import Logo from './Logo';

// create a component
const DangKy = ({navigation}) => {

    const [email, setemail] = useState('')
    const [matkhau, setmatkhau] = useState('')
    const [xnmatkhau, setxnmatkhau] = useState('')
    const checkInput = () => {
        if (!email.trim()) {
            Alert.alert('Thông báo', 'Hãy nhập tài khoản');
            return;
        }
        else if (!matkhau.trim()) {
            Alert.alert('Thông báo', 'Hãy nhập mật khẩu');
            return;
        }
        else if (!xnmatkhau.trim()) {
            Alert.alert('Thông báo', 'Hãy xác nhận mật khẩu');
            return;
        }
        else if (matkhau != xnmatkhau) {
            Alert.alert('Thông báo', 'xác nhận mật khẩu không chính xác');
            return;
        }
        else {
            auth()
                .createUserWithEmailAndPassword(email, matkhau)
                .then(()=>{
                    navigation.navigate('Home')
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('Thông báo', 'Địa chỉ email đã được sử dụng');
                    }
                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('Thông báo', 'Địa chỉ email không hợp lệ');
                    }

                });
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.Anh}>
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
                        secureTextEntry={true}
                        style={styles.input}
                        value={matkhau}
                        onChangeText={text => setmatkhau(text)}
                    />

                    <TextInput
                        placeholder="Xác nhận mật khẩu"
                        secureTextEntry={true}
                        style={styles.input}
                        value={xnmatkhau}
                        onChangeText={text => setxnmatkhau(text)}
                    />
                    <TouchableOpacity style={styles.nut} onPress={checkInput}>
                        <Text style={styles.chu}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    Anh: {
        height: '100%',
        width: '100%'
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
    input: {
        height: 45,
        backgroundColor: '#ffffff',
        color: 'black',
        width: 250,
        borderRadius: 8,
        margin: 10,
        fontSize: 15,
        paddingLeft: 12,
    },
    loi: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center',
        backgroundColor: '#bdbadb'
    },
    nut: {
        alignSelf: 'center',
        height: 40,
        width: 160,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 5
    },
    chu: {
        textAlign: 'center',
        color: '#fffb26',
        fontWeight: 'bold',
        fontSize: 20

    },
});

//make this component available to the app
export default DangKy;

