import React from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";

export function ForgotPassword() {
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

        </View>
    )
}

const styles = StyleSheet.create({
    div: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    inputs: {
        justifyContent: 'center',
        width: '70%',
        height: 30,
        padding: 2,
        borderRadius: 12,
        border: 1,
        margin: 10,
        backgroundColor: '#d9d9d9',
        textAlign: 'center',
    }
})