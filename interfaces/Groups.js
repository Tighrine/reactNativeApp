import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ListItem, List } from 'native-base';

export class Groups extends Component {

    state= {
        groups: ["DWM 1819", ""]
    }

    navigateToGrades = () => {
        this.props.navigation.navigate('Grades')
    }

    render() {
        return (
            <View>
                <List>
                    <ListItem>
                        <Text onPress={this.navigateToGrades}>DWM 1819</Text>
                    </ListItem>
                </List>
            </View>
        )
    }
}

export default Groups