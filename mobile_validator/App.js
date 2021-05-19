import React, {useState} from 'react'
import {View,Button,Text, Dimensions, TextInput} from'react-native';

export default () => {
  const Wid=Dimensions.get('window').width;
  const h=Dimensions.get('window').height;
  const [notApplicable, setNA] = useState(false);
  const [valid, setValid] = useState(true);
  const [correct, setCorrect] = useState(false);
  const [alfaError, setError] = useState(false);

  const [num,setNumber]=useState(null);


  const handleData=async ()=>{  
      fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode`,
      {
        headers:{
          // 'Accept-language':'',
        'user-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
        },
        method:'GET',
       }).then(res=>{ return res.json();}).then(
         response=>{
              // console.log(response['sessions']);
              setResult(response['sessions']);
              setf('true');
        }).catch(
          error=>{console.log(error)}
          );
    }
    
    
  return (
    <View style={{height:h,backgroundColor:'#eee'}}>

      <View style={{height:h-100}}>
     {/* Title */}
      <View style={{alignItems:'center',backgroundColor:'#fee'}}>
        <Text style={{fontSize:20, fontWeight:'bold',color:'#e00',textShadowColor:'gray',textShadowRadius:12,}}>Mobile Number Validator</Text>
      </View>
      {/* <View> style={{backgroundColor:'green',alignItems:'center'}}> */}
      
      
      
      <View style={{padding:20,paddingTop:0}}>

        <Text style={{textAlign:'center',backgroundColor:'#ccc'}}>Status: </Text>
        {!valid && <View style={{backgroundColor:'red',alignItems:'center'}}>
           <Text style={{paddingTop:10,color:'white',height:50}}>Invalid Mobile Number</Text>
           </View>}
        {alfaError && <View style={{backgroundColor:'red',alignItems:'center'}}>
          <Text style={{paddingTop:10,color:'white',height:50}}>Number does not contain alphabets and special characters.</Text>
          </View>}
        {(!alfaError&&valid) && <View style={{backgroundColor:'green',alignItems:'center'}}>
          <Text style={{paddingTop:10,color:'white',height:50}}>Press button to Validate</Text>
          </View>}
        
      </View>

      <View style={{margin:20}}>   
         
      <Text style={{textAlign:'center'}}>Enter Mobile Number to Validate</Text>

        <TextInput 
          style={{margin:10,borderWidth:1,alignSelf:'center',width:Wid/2}}
          placeholder='Mobile Number'
          keyboardType='number-pad'
          maxLength={10}
        
          onChangeText={(e)=>{
            setCorrect(false);
            ( 
              (e.length<10)?
              (setValid(false),setError(false),setNA(false))
              :
              (!/^[0-9]{10}$/.test(e))?
                    ( setError(true),setValid(true) )
                    :
                    ( setNumber(e) , setValid(true),setError(false) )
              )
            
          }
        }
        />
        
        {/* {!valid && <Text style={{color:'red',textAlign:'center'}}>Invalid Mobile Number</Text>}
        {alfaError && <Text style={{color:'red',textAlign:'center'}}>Mobile Number can't contain alphabets</Text>} */}

      {(!alfaError&&valid)&&
      <Button 
        title='Validate'
        onPress={()=>{
          ((num!=null)&&(valid)&&(!alfaError)) 
          &&
          ((num[0]=='9'||num[0]=='8'||num[0]=='7'||num[0]=='6'))?(setCorrect(true)):(setNA(true))
        }}
      />
      }
        <View style={{marginTop:10,alignItems:'center',height:150}}>
          {correct &&(
            <View style={{backgroundColor:'green',height:120,width:Wid-50}}> 
              <Text style={{textAlign:'center',backgroundColor:'#ccc',padding:10}}>Result: </Text>
            <Text style={{paddingTop:16,fontSize:16,color:'white',textAlign:'center'}}>
                Mobile Number is valid.
            </Text>
            </View>
            )
          } 
          {notApplicable &&(
            <View style={{backgroundColor:'red',height:120,width:Wid-50}}>
            
            <Text style={{textAlign:'center',backgroundColor:'#ccc',padding:10}}>Result: </Text>
            <Text style={{paddingTop:16,fontSize:16,color:'white',textAlign:'center'}}>
                Mobile Number is NOT valid.
            </Text>
            </View>
            )
          } 
      {/* {!valid && <View style={{marginTop:10,backgroundColor:'red',alignItems:'center'}}>
          <Text style={{paddingTop:100,color:'white',height:200}}>Invalid Mobile Number</Text>
          </View>}
      {alfaError && <View style={{marginTop:10,backgroundColor:'red',alignItems:'center'}}>
        <Text style={{paddingTop:100,color:'white',height:200}}>Mobile Number can't contain alphabets</Text>
        </View>} */}


        </View>
      </View>
      </View>
      {/* Footer  */}
      <View style={{alignItems:'center',backgroundColor:'#fee',height:100}}>
        <Text style={{fontSize:12, fontWeight:'bold',color:'#e00',textShadowColor:'gray',textShadowRadius:12,}}>Created By Dharm Vashisth</Text>
      </View>

    </View>
  );
}
