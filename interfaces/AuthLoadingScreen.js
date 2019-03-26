import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { getUserToken } from '../redux/action';

class AuthLoadingScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor() {
        super();
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = () => {
        console.log('dfsjgkf')
        this.props.getUser().then(data => {
            console.log("user data: ", this.props.user.token.token)
            this.props.navigation.navigate(this.props.user.token.token.sToken !== undefined ? 'Auth' : 'App');
        })
            .catch(error => {
                this.setState({ error })
            })

    };

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

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    user: state,
});


const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);