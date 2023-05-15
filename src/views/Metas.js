import * as React from 'react';
import { View, Text, Button } from 'react-native';

function MetaScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ef780e' }}>
            <Text>Telas de Metas</Text>
            <Button title='Ir para Home' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default MetaScreen;