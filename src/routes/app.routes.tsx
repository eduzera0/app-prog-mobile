import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Favorites } from '../pages/favorites';
import { Profile } from '../pages/profile';

import { EvilIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { TabBarIndicator } from 'react-native-tab-view';
import { Categorias } from '../pages/category';
import { ForgotPassword } from '../pages/forgotPassword';
import { SignUp } from '../pages/signup';
import { CreateProduct } from '../pages/createProduct';
import { CreateBrand } from '../pages/createBrand';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu } from '../pages/menu';


export function AppRoutes() {

    const { Navigator, Screen } = createMaterialTopTabNavigator();
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <View style={{height: 90, top: 50, backgroundColor:'#00386B'}}>
                <EvilIcons name='user' color='white' size={45} />
            </View>
            
            <Stack.Navigator initialRouteName='Login'
                screenOptions={{headerStyle: {backgroundColor: '#00386B'} }}
            >
                <Stack.Screen name='Feed' component={Home}/>
                <Stack.Screen name='Categorias' component={Categorias}/>
                <Stack.Screen name='Favoritos' component={Favorites} />
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <Stack.Screen name='Perfil' component={Profile}/>
                <Stack.Screen name='Recuperar Senha' component={ForgotPassword}/>
                <Stack.Screen name='Signup' component={SignUp}/>
                <Stack.Screen name='Criar Produto' component={CreateProduct}/>
                <Stack.Screen name='Criar Marca' component={CreateBrand}/>
                <Stack.Screen name='Menu' component={Menu}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}