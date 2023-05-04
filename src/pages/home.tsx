import React from "react";
import { View, Text } from "react-native";

import { Item } from "../components/HudItem";


export function Home() {
    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>

            <Item />
            <Item />
            <Item />
            <Item />

        </View>
    )
}