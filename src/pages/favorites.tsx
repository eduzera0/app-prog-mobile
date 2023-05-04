import React from "react";
import { View, Text } from "react-native";

import { Item } from "../components/HudItem";


export function Favorites() {
    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center', padding: 15}}>

            <Item />
            <Item />
            <Item />
            <Item />

                

        </View>
    )
}