import { Alert, StyleSheet,ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react'
import Question from '../components/QuestionLayout';
class Quiz extends Component {
    constructor(props){
        super(props);
        this.state=({question:[{'':''}],f:false,count:0,total:20,colorStatus:'red',apiStatus:'Fetching Data...'})
    }
    async componentDidMount(){
            await fetch(`https://opentdb.com/api.php?amount=`+this.state.total+`&category=9&type=multiple`, // 18-cs ,9-gk
              {
                headers:{
                  // 'Accept-language':'',
                'user-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
                },
                method:'GET',
               }).then(res=>{ this.setState({colorStatus:'green',apiStatus:'Loading Data...'});return res.json();}).then(
                 response=>{
                    //   console.log(response['results']);
                      this.setState({
                        question:response['results'],
                        f:true,
                      })
                }).catch(
                  error=>{console.log(error)}
                );
        
    }
    incrementCount=()=>{
        
        var c=this.state.count;
        c++;
        // if(c>9)
        //         c=0;
        this.setState({
            count:c,
        });
    }
    decrementCount=()=>{
        var c=this.state.count;
        if(c>0)
            c--;
        this.setState({
            count:c,
        });
    }
    render() {
        return (
        <View style={{backgroundColor:'#ffbe0b',height:'100%'}}>         
            { this.state.f?
                (<View>
                    <View style={{height:'89%'}}>
                        <Question  count={this.state.count} question={this.state.question} total={this.state.total} />
                    </View>
                    <View style={{padding:4,height:'10%',marginTop:5,borderWidth:1,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#e85d04',}}>
                        <TouchableOpacity onPress={this.decrementCount}>
                            <Text style={{backgroundColor:'navy',color:'white',fontSize:24,textAlign:'center',fontWeight:'bold',padding:20,paddingTop:5,paddingBottom:5,borderRadius:10}}>Previous</Text>
                        </TouchableOpacity>
                        {/* condition to submit the quiz on the last button */}
                        {(this.state.count==(this.state.total-1))?(
                            <TouchableOpacity 
                            onPress={()=>{
                                Alert.alert(
                                    "Are your sure?",
                                    "Are you sure you want to Submit the quiz?",
                                    [
                                      {
                                        text: "Yes",
                                        onPress: () => {
                                            this.props.navigation.navigate('Result');
                                        },
                                      },
                                      {
                                        text: "No",
                                      },
                                    ]
                                  );
                                
                            }}
                            >
                              <Text style={{backgroundColor:'green',color:'white',fontSize:24,textAlign:'center',fontWeight:'bold',padding:20,paddingTop:5,paddingBottom:5,borderRadius:10}}>Submit</Text>
                            </TouchableOpacity>
                            )
                            :
                            (
                            <TouchableOpacity 
                                onPress={this.incrementCount}
                            >
                            <Text style={{backgroundColor:'navy',color:'white',fontSize:24,textAlign:'center',fontWeight:'bold',padding:20,paddingTop:5,paddingBottom:5,borderRadius:10}}>Next</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                        {/* <Text>Data </Text> */}
                </View>)
                :
                (<View style={{marginTop:'30%'}}> 
                    <ActivityIndicator  size="large" color={this.state.colorStatus}/>
                    <Text style={{fontSize:24,textAlign:'center'}}>{'\n\n'}{this.state.apiStatus}</Text>
                </View>
                )
            }     
        </View>);
    }
}
export default Quiz;