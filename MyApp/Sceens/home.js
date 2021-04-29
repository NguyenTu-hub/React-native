import React from 'react'
import {Text,Image,Picker,View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import Product from "../Components/product"
import detail from "../Sceens/detail"
export default class Home extends React.Component{
    state={
        category:"Historical"
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:"#fff"}}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:40,
                    marginHorizontal:20
                    
                }}>
                    <View style={{ width:"10%" }}>
                        <Image source={require('../Images/menu.png')} style={{
                            flex:1,
                            width:null,
                            height:null,
                            resizeMode:'contain'
                        }}></Image>
                      </View>  
                    <View style={{
                          width:"80%",
                          alignItems:"center",
                      }}>
                          <Picker selectedValue={this.state.category}
                          style={{height:50,width:160}}
                          onValueChange={(itemValue,itemIndex)=>
                            this.setState({category:itemValue})
                        }
                          >
                              <Picker.Item
                              label="Historical"
                              value="Historical"
                              ></Picker.Item>
                               <Picker.Item
                              label="Action"
                              value="Action"
                              ></Picker.Item>
                               <Picker.Item
                              label="Physical"
                              value="Physical"
                              ></Picker.Item>
                          </Picker>

                      </View>
                      <View style={{
                          paddingHorizontal:2,
                          marginTop:10
                      }}><Image source={require('../Images/search.png')}style={{
                            resizeMode:'contain',
                            width:20
                      }}></Image></View>
                </View>
              <View style={{
                  marginTop:40,
                  marginHorizontal:20,
                
              }}>
                  <Text style={{
                      fontSize:30,
                      fontWeight:"bold"
                  }}>
                      Book that meets your needs
                  </Text>
              </View>
              <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop:48}}>
                  <View style={{
                      alignItems:"center",
                      flexDirection:"row",
                      backgroundColor:"#f9dd7a",
                      marginHorizontal:15,
                      borderRadius:25,
                      paddingVertical:5,
                      paddingHorizontal:15
                  }}>
                      <Image source={require('../Images/code.jpg')}
                      style={{height:40,width:40}}>
                      </Image>
                      <Text style={{
                          fontWeight:'bold',
                          fontSize:18,
                          paddingLeft:18
                      }}>
                          IT
                      </Text>
                  </View>
                  <View style={{
                      alignItems:"center",
                      flexDirection:"row",
                      backgroundColor:"#f9dd7a",
                      marginHorizontal:15,
                      borderRadius:25,
                      paddingVertical:5,
                      paddingHorizontal:15
                  }}>
                      <Image source={require('../Images/node.jpg')}
                      style={{height:40,width:40}}>
                      </Image>
                      <Text style={{
                          fontWeight:'bold',
                          fontSize:18,
                          paddingLeft:18
                      }}>
                          Music
                      </Text>
                  </View>
                  <View style={{
                      alignItems:"center",
                      flexDirection:"row",
                      backgroundColor:"#f9dd7a",
                      marginHorizontal:15,
                      borderRadius:25,
                      paddingVertical:5,
                      paddingHorizontal:15
                  }}>
                      <Image source={require('../Images/english.jpg')}
                      style={{height:40,width:40}}>
                      </Image>
                      <Text style={{
                          fontWeight:'bold',
                          fontSize:18,
                          paddingLeft:18
                      }}>
                          English
                      </Text>
                  </View>
                  <View style={{
                      alignItems:"center",
                      flexDirection:"row",
                      backgroundColor:"#f9dd7a",
                      marginHorizontal:15,
                      borderRadius:25,
                      paddingVertical:5,
                      paddingHorizontal:15
                  }}>
                      <Image source={require('../Images/cooking.jpg')}
                      style={{height:40,width:40}}>
                      </Image>
                      <Text style={{
                          fontWeight:'bold',
                          fontSize:18,
                          paddingLeft:18
                      }}>
                          cooking
                      </Text>
                  </View>
                    </ScrollView>
                  <View style={{
                      alignItems:"center",
                      marginHorizontal:20,
                      flexDirection:"row",
                      marginTop:40

                  }}>
                <View style={{
                    width:"50%"
                }}>
                    <Text style={{
                        fontSize:22,
                        fontWeight:"bold"
                    }}>New Book</Text>
                </View>

                </View> 
              <View style={{
                  flexDirection:"row",
                  marginHorizontal:15,
                   marginTop:30
              }}>
                <Product Image={require("../Images/code.jpg")}
                    tittle="Ki su code dao"
                    price="12.99"
                    onPress={()=>this.props.navigation.navigate('Detail')}
                ></Product>
                <Product 
                    Image={require("../Images/node.jpg")}
                    tittle="The life in Mozart "
                    price="10"
                    marginTop={25}></Product>
              </View>
              <View style={{
                  flexDirection:"row",
                  marginHorizontal:15,
                   marginTop:30
              }}>
                <Product Image={require("../Images/cooking.jpg")}
                    tittle="Master Chef"
                    price="12.99"
                ></Product>
                <Product 
                    Image={require("../Images/english.jpg")}
                    tittle="Learn English "
                    price="10"
                    marginTop={25}></Product>
              </View>
            </ScrollView>
        )
    }
}