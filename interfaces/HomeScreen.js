import React, { Component } from 'react'
import { Text } from "react-native";
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { createDrawerNavigator } from "react-navigation"
import Planing from './Planning';
import Groups from './Groups';
import Logout from './Logout'
import { connect } from 'react-redux'
import { getUserToken } from '../redux/action';

class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            view: 'planing'
        }

        this.toggleView = this.toggleView.bind(this)
        this.hideBackButton = this.hideBackButton.bind(this)
    }

    static navigationOptions = {
        title: 'my.genius'
    }

    componentWillMount() {
        this.props.getUser().then(data => {
            let token = JSON.parse(this.props.user.token.token)
            console.log("component", token.sToken)
            
          })
    }

    toggleView = (view) => {
        this.setState({ view })
        //let user = this.props.navigation.getParam('user', {})
        console.log('Home: ', this.props.user)
        this.props.getUser().then(() => {
            console.log(this.props.token.token);
        })
            .catch(error => {
                this.setState({ error })
            })
    }

    hideBackButton = () => {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' }),
              NavigationActions.navigate({ routeName: 'Grades' })
            ]
          })
        )
    
        console.log("getUser Login: " + JSON.stringify(this.props.user))
      }

    render() {

        let currentView = this.state.view === 'planing' ? <Planing /> : <Groups navigation={this.props.navigation} />

        return (
            <Container>
                <Content>
                    {currentView}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.toggleView('planing')} >
                            <Icon name='ios-calendar' />
                            <Text>Mon Planing</Text>
                        </Button>
                        <Button onPress={() => this.toggleView('Groups')} >
                            <Icon name="ios-star-half" />
                            <Text>Mes Notes</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { user: state }
}

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUserToken())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
