import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export function ForgotPassword({navigation}) {
    return (
        <View style={styles.div}>
            <Text>Esqueceu Sua Senha?</Text>
            <TextInput style={styles.inputs}
                placeholder='Pergunta de Segurança!'
            />
            <TextInput style={styles.inputs}
                secureTextEntry={true}
                placeholder='Nova Senha'
            />

            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Menu')}
            >
                <Text>Redefinir Senha</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    div: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 60
    },
    inputs: {
        justifyContent: 'center',
        width: '70%',
        height: 30,
        padding: 2,
        borderRadius: 12,
        margin: 10,
        backgroundColor: '#d9d9d9',
        textAlign: 'center',
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#00386B',
        alignItems: 'center',
        width: '40%',
        textAlign: 'center',
        borderRadius: 12,
        height: 40,
        margin: 10,

    }
})