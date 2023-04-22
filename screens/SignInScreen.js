import React, {useState} from "react";
import { View, Image, StyleSheet, useWindowDimensions, ScrollView , Alert} from "react-native";
import Logo from '../assets/travellogo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { authentication } from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";

export default function SignInScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () => {
        signInWithEmailAndPassword(authentication,email,password)
        .then((userCredentials) => {
            navigation.navigate('HomeScreen')
        })
        .catch((error) => {
            Alert.alert('Invalid Credentials', 'Invalid Credentials', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        })
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen')
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUpScreen')
    }

    const {height} = useWindowDimensions();
    
    return(
        <ScrollView style={styles.scroll_root} showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height*0.3}]} resizeMode="contain"></Image>
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
            <CustomButton text="Sign In" onPress={onSignInPressed} />
            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

            <SocialSignInButtons></SocialSignInButtons>

            <CustomButton text="Don't have an Account? Sign In" onPress={onSignUpPressed} type="TERTIARY"/>
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    }
})