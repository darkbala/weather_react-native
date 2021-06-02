import React from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function Output({data}) {

    return (
        <View >
                    {data && data.name ?
            <ScrollView >
                    <Text style={dataa.container}>City Name : {data.name}</Text>
                    <Text style={dataa.container}>Country Name: {data.sys.country}</Text>
                    <Text style={dataa.container}>Temperature: {data.main.temp}C° </Text>
                    <Text style={dataa.container}>Humidity: {data.main.humidity} </Text>
                    <Text style={dataa.container}>Pressure: {data.main.pressure} </Text>
                    <Text style={dataa.container}>Sky: {data.weather[0].description} </Text>
                    <Text style={dataa.container}>Wind Degree: {data.wind.deg} </Text> 
                    <Text style={dataa.container}>Wind Speed: {data.wind.speed} </Text>
            </ScrollView>
            :
            <Text style={dataa.container}>Weather</Text>
            }
        </View>
    )
}
const dataa = ({
    container:{
        color: 'black',
        fontSize: 30,
        alignSelf:'center',
        lineHeight: '55'
    }
})
