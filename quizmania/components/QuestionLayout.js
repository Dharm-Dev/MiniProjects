import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default function QuestionLayout(props){
        return(
            <View>
                    {/* question */}
                    <View style={{marginTop:20}}>
                        <View>
                            <Text style={{textAlign:'center',margin:5,fontSize:18}}>Question {props.count+ 1}</Text>
                        </View>     

                        <View style={{padding:10,height:'50%',}}>
                            <Text style={{overflow:'visible',fontSize:20, fontWeight:'bold'}}> 
                                {props.question[props.count]['question']}
                                {'\n'}
                                {/* {this.state.count} */}
                            </Text>
                        </View>                
                    
                    </View>

                    {/* option */}
                    <View style={{marginTop:10,height:'30%'}}>
                    {
                      props.question[props.count]['incorrect_answers'].map((v,k)=>{
                            return(
                            <TouchableOpacity key={k}>
                                <Text  style={{backgroundColor:'#cd4',padding:8,borderRadius:12,fontSize:15,fontWeight:'800',marginBottom:15}}>{k+1}. {v}</Text>
                            </TouchableOpacity>
                            )
                        })
                    }
                        <TouchableOpacity>
                        <Text  style={{backgroundColor:'green',padding:8,borderRadius:12,fontSize:15,fontWeight:'800',marginBottom:15}}>4. {props.question[props.count]['correct_answer'] }</Text>
                        </TouchableOpacity>
                
                    </View>
        </View>);
}

