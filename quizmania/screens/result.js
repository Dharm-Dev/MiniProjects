import React from 'react'
import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'

const Result = (props) => {
    return (
        <View>
            <View style={{height:'10%',alignItems:'center'}}>
                <Text style={{fontSize:24,}}>Result</Text>
            </View>
            
            <View style={{height:'70%'}}>
                {/* <Image style={{width:300,height:200}} source={{uri:'https://th.bing.com/th/id/OIP.7kB5RzWaTwDD7os2nQ8YlAHaEK?w=277&h=180&c=7&o=5&dpr=1.5&pid=1.7'}} /> */}
                
                <Image style={{width:'100%',height:400}} resizeMode='contain' source={{uri:'https://th.bing.com/th/id/OIP._ThsihOqX_u11Vc6Fg71CQHaEv?w=283&h=181&c=7&o=5&dpr=1.5&pid=1.7'}} />
            </View>

            <View>
                <TouchableOpacity style={{alignItems:'center'}} 
                    onPress={()=>{
                        props.navigation.navigate('Home');
                    }}
                >
                <Text style={{backgroundColor:'green',padding:10,borderRadius:10,color:'white',fontSize:16}}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({})
