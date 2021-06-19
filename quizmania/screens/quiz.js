import { Alert, StyleSheet,ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react'
class CurrentQuestion extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                    {/* question */}
                    <View style={{marginBottom:20}}>
                        <View>
                            <Text style={{textAlign:'center'}}>Question {this.props.count+ 1}</Text>
                        <View>                            
                            <Text style={{overflow:'visible',fontSize:20, fontWeight:'bold'}}> 
                                {this.props.question[this.props.count]['question']}
                                {'\n'}
                                {/* {this.state.count} */}
                            </Text>

                        </View>
                    </View>
                    {/* option */}
                    <View>
                    {this.props.question[this.props.count]['incorrect_answers'].map((v,k)=>{
                            return(
                            <TouchableOpacity key={k} onPress={(v)=>{
                                alert(v);
                            }}>
                                <Text  style={{backgroundColor:'#cad',padding:8,borderRadius:12,fontSize:15,fontWeight:'800',marginBottom:15}}>{k+1}. {v}</Text>
                                </TouchableOpacity>
                                )
                            }
                        )
                    }
                    <TouchableOpacity onPress={(v)=>{
                                alert(v);
                            }}>
                    <Text  style={{backgroundColor:'green',padding:8,borderRadius:12,fontSize:15,fontWeight:'800',marginBottom:15}}>4. { this.props.question[this.props.count]['correct_answer'] }</Text>
                                </TouchableOpacity>
{/*                             
                            <TouchableOpacity>
                                <Text>Option 2 {this.state.opt}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>{this.props.question[this.props.count]['incorrect_answers']}3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Option 4</Text>
                            </TouchableOpacity> */}
                    </View>
             </View>
            </View>
        );
    }
}

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state=({question:[{'':''}],f:false,count:0,total:20})
    }

    async componentDidMount(){
            await fetch(`https://opentdb.com/api.php?amount=`+this.state.total+`&category=18&type=multiple`,
              {
                headers:{
                  // 'Accept-language':'',
                'user-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
                },
                method:'GET',
               }).then(res=>{ return res.json();}).then(
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
        <View style={{backgroundColor:'#ffbe0b'}}>
                {/* Question container */}
            <View style={{borderWidth:2,padding:10,height:'85%'}}>
                    
               {this.state.f?
                    (<View>
                            <CurrentQuestion  count={this.state.count} question={this.state.question} />
                            {/* <Text>Data </Text> */}
                    </View>)
                    :
                    (<View>
                        <Text>Loading...</Text>
                        <ActivityIndicator  size="large" color="green"/>
                    </View>)
                }
               </View>
                   
               <View style={{padding:10,height:'10%',marginTop:10,borderWidth:1,flexDirection:'row',justifyContent:'space-between',marginBottom:10,backgroundColor:'#e85d04',
                        }}>
                     <TouchableOpacity onPress={this.decrementCount}>
                        <Text>Previous</Text>
                    </TouchableOpacity>
                    {(this.state.count==(this.state.total-1))?(
                        <TouchableOpacity 
                        onPress={()=>{
                            this.props.navigation.navigate('Result');
                        }}
                        >
                            <Text>Submit</Text>
                        </TouchableOpacity>
                        )
                        :
                        (
                        <TouchableOpacity 
                            onPress={this.incrementCount}
                        >
                        <Text>Next</Text>
                        </TouchableOpacity>
                    )}
                </View>
            
            </View>
        )
    }
}
export default Quiz;