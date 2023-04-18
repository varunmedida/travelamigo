import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";


export default function CustomButton({onPress, text, type = "PRIMARY",
bgColor, fgColor}) {
    return (
        <Pressable onPress={onPress} 
        style={[styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
        ]}>
            <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {}
                ]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },

    container_PRIMARY: {
        backgroundColor: '#3B71FE',

    },

    container_SECONDARY: {
        borderColor: '#3B71FE',
        borderWidth: 2,

    },

    container_TERTIARY: {

    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTIARY: {
        color: 'grey'
    },
    text_SECONDARY: {
        color: '#3B71FE'
    }
});