import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    Image,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetQuiz from './AssetQuis';

import { Card } from 'react-native-elements';

export default function Quiz() {
    return (
    <View style={styles.container}>
        <View style={styles.paragraph}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            QUIZ
        </Text>
        </View>
        <View style={styles.paragraph2}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            Quiz materi Baju Adat Nusantara
        </Text>
        </View>
        <View style={styles.paragraph3}>
        <Text style={{ fontSize: 12, color: 'white', textAlign: 'left' }}>
            Baju Adat Nusantara
        </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card containerStyle={styles.box}>
            <AssetQuiz />
        </Card>
        
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2B94C1',
    padding: 0,
    },

    paragraph: {
    margin: '35px 0px -45px 31px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    },

    paragraph2: {
    margin: '60px 20px 0px 31px',
    color: 'white',
    alignItems: 'center',
    },

    paragraph3: {
    margin: '1px 0px 0px 31px',
    color: 'white',
    alignItems: 'left',
    },

    box: {
    marginTop: 3,
    marginBottom:-40,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    },
});
