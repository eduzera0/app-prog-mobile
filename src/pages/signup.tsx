import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

export function SignUp({navigation}) {
    return (
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>

            <View style={{flex: 1, rowGap: 10, margin: 10, alignItems: "center"}}>

                <Text>Complete com suas Informações!</Text>

                <TextInput style={styles.div}
                    placeholder="Nome"
                />
                <TextInput style={styles.div}
                    placeholder="E-mail"
                />
                <TextInput style={styles.div}
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <TextInput style={styles.div}
                    placeholder="Confirmar Senha"
                    secureTextEntry={true}
                />

                <TextInput style={styles.div}
                    placeholder="Data de Aniversário"
                />
                <TextInput style={styles.div}
                    placeholder="Telefone"
                    keyboardType="number-pad"
                />

                <TouchableOpacity style={styles.botao}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    div : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 12,
        backgroundColor: '#D3D3D3',
        textAlign: 'center',
        width: 300,
        height: 35,
    },
    
    botao: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: 25,
        borderRadius: 12,
        backgroundColor: '#00386B',
        textAlign: 'center',
        width: 200,
        height: 40,
        textDecorationColor: ''
    }
});