import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from "react-native"

export class Cours extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text> {this.props.children} </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        /*flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',*/
        borderLeftColor: '#5388d0',
        borderLeftWidth: 4,
        borderRadius: 1,
        borderBottomWidth: 0.5, 
        position: 'relative',
        marginLeft: 5,
        height: 60
    }
})

export default Cours