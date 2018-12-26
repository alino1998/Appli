import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'
import Home from '../Components/Home';
import AllCountry from '../Components/AllCountry';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    AllCountry: {
        screen: AllCountry,
        navigationOptions: {
            title: 'AllCountry',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    
});
const AppConteneur = createAppContainer(AppNavigator);
export default AppConteneur;