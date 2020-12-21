import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function SignIn({ route, navigation }) {
    console.log('props: ', route);

    // ===================={COMPONENT DID MOUNT}=======================//
    useEffect(() => {
        console.log('component Did mount')
        return () => {
            console.log('component unmount')
        };
    }, []);

    // ===================={MAIN UI}=======================//
    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => {
                let data = {
                    name: 'Ashish Sir',
                    msg: 'Happy bday to you'
                }
                // route.params.callBack(data)
                navigation.goBack()
            }}>
                <Text>{'Go back to Welcome screen'}</Text>
            </TouchableOpacity>
            <Text>{'SignIn Sceen'}</Text>
        </View>
    );
}

export default SignIn;

/*  SignIn screen style. */
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    }
});