import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function ForgotPasswordScreen({ navigation }) {

    const [username, setUsername] = useState('');

    const onSendPressed = () => {
        navigation.navigate('NewPasswordScreen')
    }

    const onSignInPress = () => {
        navigation.navigate('SignInScreen')
    }
    
    return(
        <ScrollView style={styles.scroll_root} showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style= {styles.title}>
                Forgot your password?
            </Text>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />

            <CustomButton text="Send" onPress={onSendPressed} />

            <CustomButton text="Back to Sign In" onPress={onSignInPress} type="TERTIARY"/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll_root: {
        flex: 1,
        backgroundColor: 'white'
    },
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 80,
        marginBottom: 30,
        color: '#051C60'
    },
    text: {
        color: 'grey',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    }
})