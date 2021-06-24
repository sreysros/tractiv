import {
	StackNavigationOptions,
	HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { Platform } from 'react-native';

export const screenHeaderOption = () => {
	const screenOption: StackNavigationOptions = {
		headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
		headerBackTitleVisible: false,
		headerStyle: {
			backgroundColor: '#053053',
			shadowOpacity: 0.2,
			shadowRadius: 6,
			elevation: 6,
			shadowOffset: { height: 0, width: 10 },
			shadowColor: 'transparent'
		},
		headerLeftContainerStyle: {
			paddingLeft: Platform.OS === 'ios' ? 10 : 0,
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			color: '#fff',
		},
		headerTitleAllowFontScaling: false,
		headerBackTitle: 'Back',
	};

	return screenOption;
};

export const screenHeaderWhiteOption = () => {
	const screenOption: StackNavigationOptions = {
		title: '',
		headerStyle: {
			backgroundColor: '#FFF',
			shadowOpacity: 0,
			shadowRadius: 0,
			elevation: 0,
			shadowOffset: { height: 0, width: 0 },
			shadowColor: '#FFF'
		},
		headerTintColor: '#000',
	};
	return screenOption;
}

export const screenHeaderTransparentOption = () => {
	const screenOption: StackNavigationOptions = {
		headerBackTitleVisible: false,
		headerStyle: {
			shadowOpacity: 0,
			shadowRadius: 0,
			elevation: 0,
			shadowOffset: { height: 0, width: 0 },
		},
		headerTransparent: true,
		headerTitle: () => null,
		headerTintColor: '#000',
		headerTitleAllowFontScaling: false,
	};

	return screenOption;
};

export const switchCardInterpolator = ({
	current: { progress },
}: {
	current: { progress: any };
}) => ({
	cardStyle: {
		opacity: progress.interpolate({
			inputRange: [0, 0.5, 0.9, 1],
			outputRange: [0, 0.25, 0.7, 1],
		}),
	},
	overlayStyle: {
		opacity: progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 0.5],
			extrapolate: 'clamp',
		}),
	},
});
