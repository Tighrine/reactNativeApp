import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../interfaces/HomeScreen";
import GradesScreen from '../interfaces/GradesScreen'
import LoginScreen from "../interfaces/LoginScreen";
import AuthLoadingScreen from '../interfaces/AuthLoadingScreen'

const AppNavigator = createAppContainer(createStackNavigator({
    Home: HomeScreen,
    Grades: GradesScreen,
    Login: LoginScreen,
    AuthLoading: AuthLoadingScreen
},{
    initialRouteName: 'AuthLoading'
}
))

export default AppNavigator