import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ScreenName from '../ScreenName';
import ScreenPath from '../ScreenPath';
import { screenHeaderOption, screenHeaderTransparentOption, screenHeaderWhiteOption } from './StackOption';

const Stack = createStackNavigator();

const UnAuthorizedStack = () => {
	return (
		<Stack.Navigator
			initialRouteName={ScreenName.GettingStartScreen}
			screenOptions={screenHeaderOption()}>
			<Stack.Screen
				name={ScreenName.GettingStartScreen}
				component={ScreenPath.GettingStartScreen}
				options={{
					headerShown: false,
                    gestureEnabled: false,
				}}
			/>
            <Stack.Screen
				name={ScreenName.CreateAccountScreen}
				component={ScreenPath.CreateAccountScreen}
				options={{
					headerShown: false,
                    gestureEnabled: false,
                
				}}
			/>
			<Stack.Screen
				name={ScreenName.LoginScreen}
				component={ScreenPath.LoginScreen}
				options={{
					headerShown: false,
					gestureEnabled: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default UnAuthorizedStack;
