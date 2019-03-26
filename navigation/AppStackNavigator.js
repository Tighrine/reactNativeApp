import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../interfaces/HomeScreen";
import GradesScreen from '../interfaces/GradesScreen'
import LoginScreen from "../interfaces/LoginScreen";
import AuthLoadingScreen from '../interfaces/AuthLoadingScreen'

const AppStack = createStackNavigator({Home: HomeScreen, Grades: GradesScreen})
const AuthStack = createStackNavigator({ Login: LoginScreen })

const AppSwitchNavigator = createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen
}, {
    initialRouteName: 'AuthLoading'
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default AppNavigator