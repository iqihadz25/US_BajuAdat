import react from 'react';
import {Text, View, Image, Button, TextInput} from 'react-native';

const App = () => {
    return(
    <View style={{backgroundColor:"white", flex:1, alignItems: "left"}}>
    <Image source={require('../assets/Bali.jpeg')} style={{width:350, height:280}}/>  
    <Text style={{textAlign:'left', paddingLeft:20, fontWeight:'bold', fontSize:20, marginTop:20, color:"black"}}>Bali</Text>

    <Text style={{textAlign:'left', paddingLeft:20, fontWeight:'', fontSize:14, marginTop:20, color:"black"}}>Payas Agung adalah pakaian adat Bali yang hanya digunakan dalam berbagai acara adat seperti pernikahan, munggah deha (upacara kedewasaan), pitra yadnya (ngaben), mesagih (upacara potong gigi), dan upacara adat lainnya.
Payas Agung dominan dengan warna emas dan mahkota tinggi yang menjulang. Untuk pria, Payas Agung mengkombinasikan lilitan kain songket mewah dengan jas beludru bermotif prada Bali.</Text>

<Text style={{textAlign:'left', paddingLeft:20, fontWeight:'', fontSize:14, marginTop:20, color:"black"}}>Pada bagian dahi wanita dirias dengan lengkungan atau srinata agar wanita terlihat lebih bersahaja. Di antara kedua alis terdapat bindi yang dalam agama Hindu diyakini sebagai simbol penanda cinta, kecantikan, kemakmuran, kehormatan, hingga penangkal nasib buruk. Dahi menjadi lokasi penggunaan bindi karena merupakan tempat cakra keenam.</Text>

<Text style={{textAlign:'left', paddingLeft:20, fontWeight:'', fontSize:14, marginTop:20, color:"black"}}>Busana wanita akan memakai tapih (kain) panjang yang melilit tubuh dari dada hingga ke jari kaki. Tapih ini akan dilapisi kemben sebagai penutup dada dan kamen untuk menutup hingga ke mata kaki.Perhiasan yang digunakan adalah cerik (seperti gelang) di bahu sebelah kiri serta pending emas (seperti ikat pinggang) di pinggang, gelang kana di lengan, dan gelang satru di pergelangan tangan
</Text>
    </View>
    );
}

export default App;