import React from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function Menu({ navigation }){
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Feed')}>
                <Text>Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Categorias')}
            >
                <Text>Categorias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Favoritos')}
            >
                <Text>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Perfil')}
            >
                <Text>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Criar Produto')}
            >
                <Text>Criar Produto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Criar Marca')}
            >
                <Text>Criar Marca</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        margin: 20
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#d9d9d9',
        padding: 5,
        margin: 5,
        borderRadius: 12,
        width: 200,
        height: 40
    }
});