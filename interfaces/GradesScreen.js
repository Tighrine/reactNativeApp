import React, { Component } from 'react'
import { View, Text } from 'native-base';

export default class GradesScreen extends Component {

    static navigationOptions = {
        title: 'Your Grades'
    }

    render() {
        return (
            <View>
                <Text>Grades</Text>
            </View>
        )
    }
}
