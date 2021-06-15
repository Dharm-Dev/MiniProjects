import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Quiz = (props) => {
    return (
        <View style={{backgroundColor:'#ffbe0b'}}>
            {/* Question container */}
            <View style={{borderWidth:2,padding:10,height:'70%'}}>
                {/* question */}
                <View>
                    <Text style={{marginBottom:20}}>
                        Imagine you have to select one of them
                        </Text>
                </View>
                {/* option */}
                <View>
                        <TouchableOpacity>
                            <Text>Option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Option 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Option 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Option 4</Text>
                        </TouchableOpacity>
                </View>
            </View>
           <View style={{padding:10,height:'10%',marginTop:10,borderWidth:1,flexDirection:'row',justifyContent:'space-between',marginBottom:10
    ,backgroundColor:'#e85d04',
                    }}>
                <TouchableOpacity>
                    <Text>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>{
                        props.navigation.navigate('Result');
                    }}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({})
