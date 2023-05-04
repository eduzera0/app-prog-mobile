import React from "react";
import { View, Text, Image, TextInput, StyleSheet, Touchable, TouchableOpacity } from "react-native";


export function Profile() {
    return (
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
            
            <Image source={require('../../assets/debascrack.jpg')}
                style={{display: 'flex', height: 200, width: 300, alignItems: 'center', justifyContent: 'center', padding: 5, margin: 15, borderRadius: 12 }}
            />

            <View style={{flex: 1, rowGap: 10, margin: 10, alignItems: "center"}}>
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
                    placeholder="Data de Aniversário"
                />
                <TextInput style={styles.div}
                    placeholder="Telefone"
                    keyboardType="number-pad"
                />

                <TouchableOpacity style={styles.botao}>
                    <Text>Salvar</Text>
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