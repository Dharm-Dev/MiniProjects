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
                    <View style={{marginTop:20}}>
                        <View>
                            <Text style={{textAlign:'center',margin:5,fontSize:18}}>Question {this.props.count+ 1}</Text>
                        </View>     

                        <View style={{padding:10,height:'40%',}}>
                            <Text style={{overflow:'visible',fontSize:20, fontWeight:'bold'}}> 
                                {this.props.question[this.props.count]['question']}
                                {'\n'}
                                {/* {this.state.count} */}
                            </Text>
                        </View>                
                    
                    </View>

                    {/* option */}
                    <View style={{marginTop:10,height:'40%'}}>
                    {
                      this.props.question[this.props.count]['incorrect_answers'].map((v,k)=>{
                            return(
                            <TouchableOpacity key={k} onPress={(v)=>{
                                alert(v);
                            }}>
                                <Text  style={{backgroundColor:'#cad',padding:8,borderRadius:12,fontSize:15,fontWeight:'800',marginBottom:15}}>{k+1}. {v}</Text>
                            </TouchableOpacity>
                            )
                        })
                    }
                        <TouchableOpacity>
                        <Text  style={{backgroundColor:'green',padding:8,borderRadius:12,fontSize:15,fontWeight:'800',marginBottom:15}}>4. { this.props.question[this.props.count]['correct_answer'] }</Text>
                        </TouchableOpacity>
                    </View>
             </View>
            // </View>
            
        );
    }
}

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state=({question:[{'':''}],f:false,count:0,total:20})
    }

    async componentDidMount(){
            await fetch(`https://opentdb.com/api.php?amount=`+this.state.total+`&category=9&type=multiple`, // 18-cs ,9-gk
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
        <View style={{backgroundColor:'#ffbe0b',height:'100%'}}>
                {/* Question container */}
            {/* <View style={{borderWidth:2,padding:10,height:'100%'}}> */}
                    
               {this.state.f?
                    (<View>
                            <View style={{height:'89%'}}>
                            <CurrentQuestion  count={this.state.count} question={this.state.question} />
                            </View>
                            <View style={{padding:4,height:'10%',marginTop:5,borderWidth:1,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#e85d04',}}>
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
            
                            {/* <Text>Data </Text> */}
                    </View>)
                    :
                    (<View>
                        <Text>Loading...</Text>
                        <ActivityIndicator  size="large" color="green"/>
                    </View>)
                }
        
                   
              
            </View>
        )
    }
}
export default Quiz;