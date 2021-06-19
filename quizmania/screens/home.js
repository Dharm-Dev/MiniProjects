import React from 'react'
import { View, Text, Image, ImageBackground,TextInput, Button, TouchableOpacity } from 'react-native'

export default function Home(props) {
    return (
        <View style={{backgroundColor:'red',height:'100%'}}>
            
            {/* <View>
                <Text style={{backgroundColor:'#f03',textAlign:'center',color:'white',fontSize:24}}>Home Screen</Text>
            </View> */}
            <View>
                <ImageBackground style={{width:"100%",height:'100%', alignSelf:'center'}} 
                source={{uri:'https://th.bing.com/th/id/OIP.ihrdOrqovy759o2uX9L6oAHaFj?w=227&h=180&c=7&o=5&dpr=1.5&pid=1.7'}} 
                resizeMode='contain'
                >
                    
                    <TouchableOpacity style={{alignItems:'center',marginTop:'80%',}} 
                        onPress={()=>{
                            props.navigation.navigate('Quiz');
                        }}>
                        <Text style={{backgroundColor:'#d00000',color:'white',width:'30%',fontSize:24,textAlign:'center',fontWeight:'bold',padding:20,paddingTop:5,paddingBottom:5,borderRadius:10}}>
                            Start
                        </Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>

        </View>
    )
}
