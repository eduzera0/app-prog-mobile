import React from "react"
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function CreateProduct() {
    return (
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
            <Text>Cadastre seu Produto</Text>
            <View style={{flex: 1, rowGap: 10, margin: 10, alignItems: "center"}}>
                <TextInput style={styles.div}
                    placeholder="Nome"
                />
                <TextInput style={styles.div}
                    placeholder="Marca"
                />
                <TextInput style={styles.div}
                    placeholder="Preço"
                    secureTextEntry={true}
                />
                <TextInput style={styles.div}
                    placeholder="Categoria"
                />
                <TextInput style={styles.div}
                    placeholder="Preço"
                    keyboardType="number-pad"
                />

    <TextInput style={styles.div2}
                    placeholder="Descrição..."
                />

                <TouchableOpacity style={styles.botao}>
                    <Text>Cadastrar Produto</Text>
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

    div2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 12,
        backgroundColor: '#D3D3D3',
        textAlign: 'center',
        width: 300,
        height: 75,
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