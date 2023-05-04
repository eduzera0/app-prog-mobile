import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons, FontAwesome, FontAwesome5,EvilIcons } from '@expo/vector-icons';


export function Item(){
    return (
        <View style={
            {display: 'flex',width: '95%', height: 126, backgroundColor: '#D9D9D9', borderRadius: 24, flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginBottom: 25}
        }>
            <View style={{backgroundColor: 'gray', height: 60, padding: 12, borderRadius: 12, margin: 4}}>
                <MaterialCommunityIcons name="shoe-cleat" size={32} color="black" />
            </View>
    
            <View style={{margin: 8}}>
                <Text>Item Name</Text>
                <Text>Categoria: Item Category</Text>
            </View>
    
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', margin: 8}}>
                <FontAwesome name="star" size={16} color="black" />
                <FontAwesome name="star" size={16} color="black" />
                <FontAwesome name="star" size={16} color="black" />
                <FontAwesome name="star" size={16} color="gray" />
                <FontAwesome name="star" size={16} color="gray" />
    
            </View>
    
        </View>
    )

}