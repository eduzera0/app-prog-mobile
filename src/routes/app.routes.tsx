import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();

import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Favorites } from '../pages/favorites';
import { Profile } from '../pages/profile';

import { EvilIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { TabBarIndicator } from 'react-native-tab-view';
import { Categorias } from '../pages/category';
import { ForgotPassword } from '../pages/forgotPassword';


export function AppRoutes() {
    return (
        <NavigationContainer>
            <View style={{height: 90, top: 50, backgroundColor:'#00386B'}}>
                <EvilIcons name='user' color='white' size={45} />
            </View>
            
            <Navigator
                screenOptions={
                    {tabBarContentContainerStyle: {backgroundColor: '#00386B' },
                    tabBarActiveTintColor: 'white',
                    }
                }
            >
                <Screen name='Feed' component={Home}/>
                <Screen name='Categorias' component={Categorias}/>
                <Screen name='Favoritos' component={Favorites} />
                <Screen name='Login' component={Login}/>
                <Screen name='Perfil' component={Profile}/>
                <Screen name='ForgotPassword' component={ForgotPassword}/>
            </Navigator>
        </NavigationContainer>
    )
}