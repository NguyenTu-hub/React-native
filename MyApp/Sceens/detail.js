import React from 'react'
import {Text,TouchableOpacity,View,Image} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

export default class detail extends React.Component{
    state={
        quanlity:1
    }
    addQuantity=(quanlity)=>{
        this.setState({quanlity: this.state.quanlity+1});
    }
    subtractQuantity=(quanlity)=>{
        if(this.state.quanlity>0)
        this.setState({quanlity: this.state.quanlity-1});
    }
    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                <ScrollView>
                <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginTop:20,
                marginHorizontal:20
            }}>
                <View style={{
                    width:"10%"
                }}>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
                    >
                        <Image 
                            source={require('../Images/back.png')}>
                            </Image>
                    </TouchableOpacity>
                </View>
                <View style={{width:"80%",alignItems:"center"}}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        alignSelf:"center"
                    }}>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            fontSize:16
                        }}>IT</Text>
                    </View>
                    
                </View>
            </View>
            <Image source={require('../Images/code.jpg')}
            
            style={{
                height:300,
                width:300,
                alignSelf:"center"
            }}>

            </Image>
            <View style={{
                flexDirection:"row",
                alignSelf:"center",
                alignItems:"center",
                backgroundColor:"#f6f3fb",
                paddingHorizontal:20,
                paddingVertical:8,
                borderRadius:20
            }}>
                <TouchableOpacity 
                    onPress={this.addQuantity}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18
                            }}>+</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:18,
                        paddingHorizontal:20

                    }}>
                        {this.state.quanlity}
                    </Text>
                    <TouchableOpacity 
                    onPress={this.subtractQuantity}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18
                            }}>-</Text>
                    </TouchableOpacity>
                 
            </View>
            <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginHorizontal:20,
                        marginTop:30
                    }}>
                        <View>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:25
                            }}>
                                Ki su code dao
                            </Text>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:15,
                                color:"#a4a4a9"
                            }}>
                                Author:Pham Huy Hoang
                            </Text>
                        </View>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:28,
                            marginLeft:80
                        }}>$12.99</Text>

                    </View>
                         <Text style={{
                             marginTop:20,
                             fontWeight:"bold",
                             marginLeft:20,
                             fontSize:28

                    }}>
                       Related books
                    </Text>
                    <ScrollView
                    horizontal 
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginTop:20,
                        marginHorizontal:20
                    }}
                    >
                        <View style={{
                            borderRadius:1,
                            borderWidth:0.1,
                            paddingHorizontal:12,
                            paddingVertical:8,
                            marginRight:10
                        }}>
                            <Image
                                source={require('../Images/The-Four.jpg')}
                                style={{height:30,width:30}}></Image>
                        </View>
                        <View style={{
                            borderRadius:1,
                            borderWidth:0.1,
                            paddingHorizontal:12,
                            paddingVertical:8,
                            marginRight:10
                        }}>
                            <Image
                                source={require('../Images/Rise-of-the-Robots-683x1024.jpg')}
                                style={{height:30,width:30}}></Image>
                        </View>
                        <View style={{
                            borderRadius:1,
                            borderWidth:0.1,
                            paddingHorizontal:12,
                            paddingVertical:8,
                            marginRight:10
                        }}>
                            <Image
                                source={require('../Images/Technically-Wrong-683x1024.jpg')}
                                style={{height:30,width:30}}></Image>
                        </View>
                        <View style={{
                            borderRadius:1,
                            borderWidth:0.1,
                            paddingHorizontal:12,
                            paddingVertical:8,
                            marginRight:20
                        }}>
                            <Image
                                source={require('../Images/The-Second-Machine-Age.jpg')}
                                style={{height:30,width:30}}></Image>
                        </View>
                    </ScrollView>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:20,
                        marginTop:30,
                        marginHorizontal:20
                    }}>
                        Description
                    </Text>
                    <Text style={{
                        color:"#a4a4a9",
                        fontWeight:"bold",
                        fontSize:15,
                        marginTop:10,
                        marginHorizontal:20,
                        textAlign:"justify"
                    }}>
                        1 quyen sach rat hay ve cai gi do ne nsdssdasdasdasdas
                        asdasdasd
                        asdasdasdasdanasd
                        1 quyen sach rat hay ve cai gi do ne nsdssdasdasdasdas
                        asdasdasd
                        asdasdasdasdanasd
                        1 quyen sach rat hay ve cai gi do ne nsdssdasdasdasdas
                        asdasdasd
                        asdasdasdasdanasd
                    </Text>
                </ScrollView>
                    <View style={{
                        position:"absolute",
                        backgroundColor:"#fff",
                        height:50,
                        width:50,
                        bottom:20,
                        alignItems:"center",
                        justifyContent:"center",
                        alignSelf:"center",
                        borderRadius:25
                    }}>
                        <Image
                            source={require('../Images/shopping_cart_48px.png')}
                        ></Image>
                    </View>
                
            </View>
           
        )
    }
}