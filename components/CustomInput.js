import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";

export default function CustomInput({value, setValue, placeholder, secureTextEntry}) {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            style={styles.input} 
            placeholder={placeholder} 
            secureTextEntry= {secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10
    },
    input: {}
})