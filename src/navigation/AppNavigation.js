import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import NavigationService from './NavigationService';

const Stack = createStackNavigator();

import WelcomeScreen from '../container/onBoarding/welcomeScreen/WelcomeScreen';
import SignIn from '../container/onBoarding/signIn/SignIn';

export default function AppNavigation() {
    return (
        <NavigationContainer ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
            <Stack.Navigator headerMode="none"
                screenOptions={{
                    gestureEnabled: false,
                    headerBackTitleVisible: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            >
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
