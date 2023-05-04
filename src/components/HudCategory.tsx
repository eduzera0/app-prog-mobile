import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export function CategoryItem() {
    return (
        <View style={
            {display: 'flex',width: '90%', height: 100, backgroundColor: '#D9D9D9', borderRadius: 24, flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginBottom: 25}
        }>
            <View style={{backgroundColor: 'gray', height: 60, width: 90 , padding: 12, borderRadius: 12, margin: 8, justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcons name="shoe-cleat" size={32} color="black" />
            </View>
    
            <View style={{margin: 8}}>
                <Text style={{fontSize: 24}}>Item Category</Text>
            </View>
    
    
        </View>
    )
}