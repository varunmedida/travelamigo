import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function NewPasswordScreen() {

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('HomeScreen')
    }

    const onSignInPress = () => {
        navigation.navigate('SignInScreen')
    }
    
    return(
        <ScrollView style={styles.scroll_root} showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style= {styles.title}>
                Reset your password
            </Text>
            <CustomInput placeholder="Code" value={code} setValue={setCode} />

            <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword} />

            <CustomButton text="Submit" onPress={onSubmitPressed} />

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