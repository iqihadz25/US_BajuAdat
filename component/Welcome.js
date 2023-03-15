import react from 'react';
import {View, Image, Button, Text} from 'react-native';
const Mulai = () => alert('Anda berhasil login!')

const App = () => {
    return(
    <View style={{backgroundColor:"white", flex:1, justifyContent: "center",
        alignItems: "center"}}>
    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, marginBottom:0, marginTop:100, color:"black"}}>Pakaian</Text> 
    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, marginBottom:20, color:"black"}}>Adat Nusantara</Text> 
    <Text style={{textAlign:'center', fontSize:15, marginBottom:100, color:"black"}}>Mari belajar dan mengenal berbagai macam Pakaian Adat Nusantara!</Text> 

    
    <View style={{marginTop: 150, paddingLeft:10, paddingRight:10, width:250, }}>
        <Button 
            title = "Mulai"
            color = "#00337C"
            onPress={Mulai}/>
    </View>

    </View>

    );
}

export default App;