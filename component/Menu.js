import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'; 

import AssetMenu from './AssetMenu';
import { Card } from 'react-native-elements';

export default function Home() {
    return (
    <View style={styles.container}>
        <View style={styles.paragraph}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: '' }}>
            Hi, 
        </Text>
        </View>
        <View style={styles.paragraph2}>
        <Text style={{ fontSize: 17, color: 'black' }}>
            Apa yang bisa kami bantu?
        </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', marginTop: 32, marginBottom: 16, justifyContent: 'center' }}>
        <TouchableOpacity>
        <Card containerStyle={styles.outerCard}>
            <Text style={styles.paragraph3}>
            Pakaian Adat Nusantara
            </Text>
        </Card>
        </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center', paddingLeft:100, paddingRight:100, marginBottom: 400, justifyContent: 'center' }}>
        <TouchableOpacity>
        <Card containerStyle={styles.outerCard}>
            <Text style={styles.paragraph3}>
            Quiz
            </Text>
        </Card>
        </TouchableOpacity>
        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 0,
    },

    paragraph: {
    margin: '40px 0px -45px 31px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    },

    paragraph2: {
    margin: '53px 31px 0px 31px',
    color: 'white',
    },
    
    box: {
    marginTop: 40,
    height: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    },
});
