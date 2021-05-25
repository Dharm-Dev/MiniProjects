/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import Data from './Extra/data';
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      result:[{}],
      f:false,
      fmid:false,
      total:0,

    }
    // this.callME();
  
  }

   async componentDidMount(){
    const api=`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`;
    await fetch(api,
      {
          headers:{
          // 'Accept-language':'',
          'user-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
          },
          method:'GET',
      }
     ).then(res=>{ this.setState({fmid:true});return res.json(); }).then(
         response=>{
            this.setState({
              result:response['Results'],
              total:response['Count'],
          });
          }
        ).catch(
        error=>{console.log(error)}
      );
      this.setState({f:true,})
  }

  render(props){
    return(
    // <ScrollView>
    <View style={{height:this.h}}>
      <Text style={{textAlign:'center',backgroundColor:'gray',color:'yellow'}}>Car Details</Text>
      <ImageBackground style={{height:this.h-20,width:this.w}} source={{uri:"https://th.bing.com/th/id/OIP.U36m8qBEgZSUwuSbGoVK3AHaNK?w=187&h=333&c=7&o=5&dpr=1.5&pid=1.7"}}>
          {(!this.state.f)?(      
            <View style={{height:this.h-80}}> 
              {(this.state.fmid)?(<ActivityIndicator color='green' size='large' /> ):(<ActivityIndicator color='red' size='large' /> )}
              <Text>Fetching Data From Server ... {'\n'} Server : https://vpic.nhtsa.dot.gov/api/</Text>          
            </View>
            ) :
            ( <View style={{height:this.h-80}}>
              <Text style={{color:'white'}}>Total : {this.state.total}</Text>
            <ScrollView keyboardShouldPersistTaps="handled" style={{height:this.h-100}}>
                  
                    {this.state.result.map((i,k)=>{
                      return (
                      <View key={k} style={{margin:12,backgroundColor:'gray' , opacity:0.5,alignItems:'center',borderWidth:2, padding:20,elevation:4}}>
                        <Text>Id: {i.MakeId}</Text>
                        <Text>Model: {i.MakeName}</Text>
                        <Text>VehicleTypeName: {i.VehicleTypeName}</Text>
                      </View> );
                        })
                    }
              </ScrollView>
              </View>
              )       
        }
        <Text style={{textAlign:'center',backgroundColor:'gray',color:'yellow'}}>Created By Dharm Vashisth</Text>
        </ImageBackground>
    </View>)
  }
  h=Dimensions.get('window').height;
  w=Dimensions.get('window').width;
  // style=StyleSheet.create({
  //   oneView:{
  //     height:this.h,
  //     width:this.w,
  //   }

  // });
}

export default App;

  // {/* <FlatList 
  //       data={this.state.result[2]}
  //       renderItem={({item})=>{
  //         <View key={k}>
  //           <Text>{item}</Text>
  //         </View>
  //       }}
  //       keyExtractor={item=>item.MakeId}
  //     />  */}
      
  // data:[
  //   {
  //       "name": "Miyah Myles",
  //       "email": "miyah.myles@gmail.com",
  //       "position": "Data Entry Clerk",
  //       "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
  //   },
  //   {
  //       "name": "June Cha",
  //       "email": "june.cha@gmail.com",
  //       "position": "Sales Manager",
  //       "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
  //   },
  //   {
  //       "name": "Iida Niskanen",
  //       "email": "iida.niskanen@gmail.com",
  //       "position": "Sales Manager",
  //       "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
  //   },
  //   {
  //       "name": "Renee Sims",
  //       "email": "renee.sims@gmail.com",
  //       "position": "Medical Assistant",
  //       "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
  //   },
  //   {
  //       "name": "Jonathan Nu\u00f1ez",
  //       "email": "jonathan.nu\u00f1ez@gmail.com",
  //       "position": "Clerical",
  //       "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
  //   },
  //   {
  //       "name": "Sasha Ho",
  //       "email": "sasha.ho@gmail.com",
  //       "position": "Administrative Assistant",
  //       "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
  //   },
  //   {
  //       "name": "Abdullah Hadley",
  //       "email": "abdullah.hadley@gmail.com",
  //       "position": "Marketing",
  //       "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
  //   },
  //   {
  //       "name": "Thomas Stock",
  //       "email": "thomas.stock@gmail.com",
  //       "position": "Product Designer",
  //       "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
  //   },
  //   {
  //       "name": "Veeti Seppanen",
  //       "email": "veeti.seppanen@gmail.com",
  //       "position": "Product Designer",
  //       "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
  //   },
  //   {
  //       "name": "Bonnie Riley",
  //       "email": "bonnie.riley@gmail.com",
  //       "position": "Marketing",
  //       "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
  //   }
  //   ],
  //   
      
  //     {/* <FlatList 
  //       data={this.state.result}
  //       renderItem={({item})=>{
  //         <View>
  //           <Text>{item}</Text>
  //         </View>
  //       }}
  //       keyExtractor={item=>item}
  //     /> */}

  //     {/* <Image  source={require('./Images/car1.jpg')} style={{height:this.h,width:this.w}}  alt='My images'/> */}
  //     {/* <FlatList 
  //           data={this.state.urlImg}
  //           renderItem={({item})=><View>
  //             <ImageBackground  source={{uri:item.url}} style={{height:this.h,width:this.w}}  alt='My images'>
  //               <Text style={{color:'white',textAlign:'center',textAlignVertical:'bottom',height:this.h,paddingBottom:220,fontSize:24,backgroundColor:'gray',opacity:0.6, fontWeight:'200',fontFamily:'monospace'}}>
  //               <Text style={{color:'#eee',textAlignVertical:'top',fontSize:16,backgroundColor:'red',opacity:0.3, fontWeight:'200',fontFamily:'monospace'}}>{item.name}</Text>
  //                 {item.name}</Text>
                
  //               </ImageBackground>
  //           </View>
  //           }
  //           keyExtractor={item=>item}
  //       /> */}
  //   {/* <FlatList

  //     data={this.state.data}
  //     renderItem={({item})=><View key={item.name} style={{elevation:5,borderColor:'red',borderRadius:12,alignItems:'center',margin:5,padding:10}} >
  //         <TouchableOpacity onPress={()=>{alert(item.name)}}>
  //         <Image source={{uri:item.photo}} style={{height:120,width:120,margin:10}} alt='I am' />
  //         </TouchableOpacity>
          
  //         <Text>{item.name}</Text>
  //         <Text>{item.position}</Text>

  //       </View>}
  //     keyExtractor={item => item}
  //   /> */}
    

  //   {/* </ScrollView> */}
  //   // )
