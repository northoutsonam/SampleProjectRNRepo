import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import NavigationService from '../../../navigation/NavigationService';

function WelcomeScreen() {

    // ===================={COMPONENT DID MOUNT}=======================//
    useEffect(() => {
        console.log('component Did mount WelcomeScreen')
        SplashScreen.hide();
        return () => {
            console.log('component unmount WelcomeScreen')
        };
    }, []);

    function callBack(data) {
        console.log('response, data', data)
    }

    let params = {
        name: 'Sonam',
        fName: 'Talvinder',
        // callBack: callBack()
    }

    // ===================={MAIN UI}=======================//
    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => { NavigationService.navigateScreen('SignIn', params) }}>
                <Text>{'Goto SignIn'}</Text>
            </TouchableOpacity>
            <Text>{'WelcomeScreen Sceen'}</Text>
        </View>
    );
}

export default WelcomeScreen;

/*  WelcomeScreen screen style. */
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    }
});