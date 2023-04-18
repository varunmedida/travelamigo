import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function ConfirmEmailScreen({ navigation }) {

    const [code, setCode] = useState('');

    const onConfirmPressed = () => {
        navigation.navigate('HomeScreen')
    }

    const onResendPressed = () => {
        console.warn("onRegisterPressed");
    }

    const onSignInPress = () => {
        navigation.navigate('SignInScreen')
    }
    
    return(
        <ScrollView style={styles.scroll_root} showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style= {styles.title}>
                Confirm your email
            </Text>
            <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />

            <CustomButton text="Confirm" onPress={onConfirmPressed} />

            <CustomButton text="Resend code" onPress={onResendPressed} type="SECONDARY"/>

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