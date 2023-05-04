import React from "react";
import { View, Text } from "react-native";

import { Item } from "../components/HudItem";
import { CategoryItem } from "../components/HudCategory";


export function Categorias() {
    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center', padding: 15 }}>

            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />

                

        </View>
    )
}