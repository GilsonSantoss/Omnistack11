import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Detail from './pages/Detail';
import Incidents from './pages/Incidents';

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screnOptions={{ headerShow: false}}>
                <AppStack.Screen name="Incidents" componet={Incidents}/>
                <AppStack.Screen name="Detail" componet={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}