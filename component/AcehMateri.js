import react from 'react';
import {Text, View, Image, Button, TextInput} from 'react-native';

const App = () => {
    return(
    <View style={{backgroundColor:"white", flex:1, alignItems: "left"}}>
    <Image source={require('../assets/Aceh.jpeg')} style={{width:350, height:280}}/>  
    <Text style={{textAlign:'left', paddingLeft:20, fontWeight:'bold', fontSize:20, marginTop:20, color:"black"}}>Aceh</Text>

    <Text style={{textAlign:'left', paddingLeft:20, fontWeight:'', fontSize:14, marginTop:20, color:"black"}}>Nama pakaian adat Aceh adalah Ulee Balang. Seperti pakaian adat pada umumnya, pakaian adat Aceh menunjukkan ke-khasan adat istiadat yang diterapkan di Daerah Istimewa Aceh. Ciri khas khusus yang dimiliki oleh pakaian adat Aceh ini merupakan salah satu hal penting yang membedakannya dengan pakaian adat lainnya. Dan khas dari baju adat Aceh adalah perpaduan dari budaya Melayu dan budaya Islam.</Text>
    </View>
    );
}

export default App;