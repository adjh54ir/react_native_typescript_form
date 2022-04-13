import { StackNavigationProp, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { CommonInteface } from '../../interface/CommonInterface';
import Home from '../main/Home';

/**
 * React에서 Router와 같이 페이지 선언 및 이동을 관리한다.
 * @param {any} appState : 사용자가 앱 내에서 상태
 * @returns
 */
const StackNavigation = (appStateType: any): JSX.Element => {

    const Stack = createStackNavigator<CommonInteface.RootStackViewList>();

    const fn_navigationScreenOptions: StackNavigationOptions = {

    }


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" screenOptions={fn_navigationScreenOptions}>
                <Stack.Screen name="home">
                    {(props) => <Home {...props} appState={appStateType.appState} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default StackNavigation;