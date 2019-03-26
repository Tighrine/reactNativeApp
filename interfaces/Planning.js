import React, { Component } from 'react'
import { Calendar } from "react-native-calendars";
import { Container } from 'native-base';
import Cours from './Cours';

export class Planing extends Component {

    constructor(props){
        super(props)
        this.state={
            selected: new Date().toLocaleDateString().replace(/\//g,"-"),
        }
        this.pressDay = this.pressDay.bind(this)
    }

    static navigationOptions = {
        title: 'Planing'
    }

    pressDay = day => {
        console.log('day pressed ', day)
        const selected = day.dateString
        this.setState({ selected })
        console.log('to day', new Date().toLocaleDateString().slice(0,10).replace(/\//g,"-"))
    }

    render() {
        return (
            <Container>
                <Calendar 
                    onDayPress={(day) => this.pressDay(day) } 
                    markedDates={{[this.state.selected]: { selected: true }}} 
                />

                <Cours>
                    My Courses 1
                </Cours>
                <Cours>
                    My Courses 2
                </Cours>
            </Container>
        )
    }
}

export default Planing