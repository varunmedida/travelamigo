import React, {useState} from "react";
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from '../assets/travellogo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

export default function SignInScreen({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () => {
        navigation.navigate('HomeScreen')
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
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
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