import React, {useState} from "react";
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Text , Alert} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { authentication } from "../firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";

export default function SignUpScreen({ navigation }) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
       createUserWithEmailAndPassword(authentication, email, password)
       .then((result) => {
        console.log(result.email)
        navigation.navigate('SignInScreen')
       })
       .catch((result) => {
        Alert.alert('Error', 'Error creating account' , [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
       })
        // 
    }

    const onSignInPress = () => {
        navigation.navigate('SignInScreen')
    }

    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    }

    const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacyPolicyPressed");
    }
    
    return(
        <ScrollView style={styles.scroll_root} showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style= {styles.title}>
                Create an Account
            </Text>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />

            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
            <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>

            <CustomButton text="Register" onPress={onRegisterPressed} />

            <Text style= {styles.text}>By registering, you confirm that you accept our{' '} 
            <Text style= {styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and 
            <Text style= {styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

            <CustomButton text="Have an Account? Sign In" onPress={onSignInPress} type="TERTIARY"/>
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