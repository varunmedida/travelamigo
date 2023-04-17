import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import OnBoardScreen from '../screens/OnBoardScreen';

const screens = {
    OnBoardScreen: {
        screen: OnBoardScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)
