import React from 'react'
import {Text,
    View,
    Image,
    TouchableOpacity} from 'react-native'

export default class Product extends React.Component{
    render(){
        return(
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    backgroundColor:"#EEEEEE",
                    height:280,
                    width:180,
                    borderRadius:20,
                    marginTop:this.props.marginTop,
                    marginRight:20
                }}
            >
                {/* <Text style={{
                        paddingHorizontal:10,
                        fontWeight:"bold",
                        fontSize:16
                    }}>
                        IT
                    </Text> */}
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    alignSelf:"center",
                    marginTop:20
                }}>
            
                    
                    <Image
                        source={this.props.Image}
                        onPress={this.props.navigation.navigative('Detail')}
                        style={{
                            height:180,
                            alignSelf:"center",
                            width:120,
                            marginTop:15,
                            marginBottom:15
                        }}></Image>
                </View>
                <Text
                        style={{
                            fontSize:18,
                            fontWeight:"bold",
                            paddingHorizontal:10
                        }}>
                            {this.props.tittle}
                    </Text>
                    <Text style={{
                            fontSize:15,
                            fontWeight:"bold",
                            paddingHorizontal:10,
                            color:"#848385"
                    }}></Text>
            </TouchableOpacity>
        )
    }
}