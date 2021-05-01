import React from 'react';
import {Text,Image,Picker,View,TouchableOpacity} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Product from "../Components/product";
import detail from "../Sceens/detail";
import { createDrawerNavigator } from '@react-navigation/drawer';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import auth from '@react-native-firebase/auth'

// export default function func(props) {
//     const navigation = useNavigation();
  
//     return <Home navigation={navigation} />;
//   }

 export default class Home extends React.Component{
    state={
        category:"Historical",
        Books:[],
    }
    constructor(props)
    {

        super(props);
        this.subscriber=firestore()
        .collection('appBook')
        .onSnapshot(docs=>{
            let Books=[]
            docs.forEach(doc=>{
                Books.push(doc.data())
            })
            this.setState({Books})
        })
    }
   getBook=async()=>{
    const Books= await firestore().collection('appBook').doc('Books').get();
    console.log(Books)
   }
    render(){
        // const { navigation } = this.props;
        return(
            <ScrollView style={{backgroundColor:"#fff"}}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:40,
                    marginHorizontal:20
                    
                }}>
                    <TouchableOpacity
                   onPress={()=>{
                    auth().signOut()
                    .then(() => this.props.navigation.navigate('MainLogin'));
                }}>
                        <View style={{ width:"10%" }}>
                        <Image source={require('../Images/menu.png')} style={{
                            flex:1,
                            width:20,
                            height:20,
                            resizeMode:'contain'
                        }}></Image>
                      </View>  
                    </TouchableOpacity>
                    
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
                  marginTop:30,
                  marginHorizontal:20,
                
              }}>
                  <Text style={{
                      fontSize:25,
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
                    flexDirection:"column"
                }}>
                    <View>
                            {this.state.Books.map((book,id)=><View key={id}>
                                {console.log(book.id)}
                <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('Detail',{id:book.id})}}
                style={{
                    backgroundColor:"#EEEEEE",
                    height:280,
                    width:160,
                    borderRadius:20,
                    marginRight:20,
                    marginVertical:10,
                    marginTop:30,
                    marginRight:10,
                    flexDirection:"row",
                    marginHorizontal:10
                }}>
                    <Image
                    style={{
                        height:180,
                        width:140,
                        alignSelf:"center",
                        marginTop:15,
                        marginBottom:15,
                        marginHorizontal:10
                    }}
                    source={{uri:book.Image}}>
                        
                    </Image>
                    <View style={{
                    flexDirection:"column",
                    marginTop:20
                }}>
                        <Text style={{
                        fontWeight:"bold",
                        fontSize:22
                    }}>
                        Name:{book.Name}
                    </Text>
                    <Text style={{
                        color:"#848385",
                        fontSize:20
                    }}>Author:{book.Author}</Text>
                     <Text style={{
                        color:"#848385",
                        fontSize:16
                    }}>Caterogy:{book.Caterogy}</Text>
                    <Text style={{
                        color:"#000",
                        fontSize:16
                    }}>Price:{book.Price}$</Text>
                    </View>  
                </TouchableOpacity>
                            </View>)}
                    
                    </View>
               
                
                </View>
                

              
            </ScrollView>
        )
    }
}