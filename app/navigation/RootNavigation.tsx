import React, { useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import NavigationProvider from './NavigationProvider';
import { Platform } from 'react-native';
import { switchCardInterpolator } from './StackNavigation/StackOption';
import ScreenName from './ScreenName';
import UnAuthorizedStack from './StackNavigation/UnAuthStack';
import AuthorizedStack from './StackNavigation/AuthStack';

const Stack = createStackNavigator();

const RootNavigation = () => {

    return (
		<NavigationContainer ref={NavigationProvider.setNavigator}>
			<Stack.Navigator
                mode='modal'
				headerMode='none'
				screenOptions={{
					gestureEnabled: false,
					cardStyle: { backgroundColor: 'transparent' },
					cardStyleInterpolator: Platform.OS === 'ios'
						? switchCardInterpolator
						: CardStyleInterpolators.forRevealFromBottomAndroid,
				}}
			>
						<Stack.Screen
							name={ScreenName.AuthorizedApplication}
							component={AuthorizedStack}
							// options={{ animationTypeForReplace: Platform.OS === 'ios' ? 'push' : 'pop' }}
						/>
			</Stack.Navigator>
		</NavigationContainer>
	);


}
export default RootNavigation;
