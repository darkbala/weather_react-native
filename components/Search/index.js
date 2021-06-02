import React from 'react'
import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Search({search, name , setName}) {
    return (
        <View>
            <TextInput
                    placeholder= 'Enter the City'
                    value={name}
                    onChangeText= {(text)=>setName(text)}
                    style={input.container}
                     />
            <TouchableOpacity 
            style={button.container}
            onPress= {search}>
                <Text  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    margin:'auto'
                }}> Press </Text>
            </TouchableOpacity>
        </View>
    )
}
const button = ({
    container:{
        width: 99,
        margin: 'auto',
        borderWidth: 4,
        marginTop: '3%',
        alignSelf: 'center'
    }
})
const input = ({
    container:{
        marginTop: '25%',
        borderWidth: 5,
        borderColor: 'black',
        fontSize: 33,
    }
})
