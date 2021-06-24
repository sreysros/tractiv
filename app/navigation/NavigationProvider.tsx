import {CommonActions, StackActions} from '@react-navigation/native';
const config: any = {};

const NavigationProvider = {
	setNavigator: (nav: any) => {
		if (nav) {
			config.navigator = nav;
		}
	},

	getNavigator: () => {
		if (config.navigator) {
			return config.navigator.getRootState();
		}
	},

	popToTop: () => {
		if (config.navigator) {
			return config.navigator.dispatch(StackActions.popToTop());
		}
	},

	navigate: (routeName: string, params?: any) => {
		if (config.navigator && routeName) {
			let action = CommonActions.navigate({name: routeName, params});
			config.navigator.dispatch(action);
		}
	},

	goBack: () => {
		if (config.navigator) {
			let action = CommonActions.goBack();
			config.navigator.dispatch(action);
		}
	},

	reset: (routeName: string, params?: object) => {
		if (config.navigator && routeName) {
			const resetAction = CommonActions.reset({
				index: 0,
				routes: [{name: routeName, params}],
			});
			config.navigator.dispatch(resetAction);
		}
	},

	popToHome: () => {
		if (config.navigator) {
			config.navigator.dispatch(StackActions.popToTop());
		}
	},
	
};

export default NavigationProvider;
