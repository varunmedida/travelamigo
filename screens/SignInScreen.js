import React, {useState} from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from '../assets/travellogo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function SignInScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot password pressed");
    }

    const onSignInFacebook = () => {
        console.warn("onSignInFacebook");
    }

    const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
    }

    const onSignInApple = () => {
        console.warn("onSignInApple");
    }

    const {height} = useWindowDimensions();
    
    return(
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height*0.3}]} resizeMode="contain"></Image>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
            <CustomButton text="Sign In" onPress={onSignInPressed} />
            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} />
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle} />
            <CustomButton text="Sign In with Apple" onPress={onSignInApple} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    }
})